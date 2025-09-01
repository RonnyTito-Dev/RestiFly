// 📂 src\components\ui\LinkText.tsx

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type LinkTextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: 'text' | 'button';
    color?: 'default' | 'white' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    full?: boolean;
    align?: 'left' | 'center' | 'right';
    to: string;
    isDisabled?: boolean;
    className?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function LinkText({
    children,
    variant = 'text',
    color = 'default',
    size = 'md',
    rounded = 'md',
    full = false,
    align = 'center',
    to,
    isDisabled = false,
    className,
    ...props
}: LinkTextProps) {
    const isExternal = to.startsWith('https://') || to.startsWith('http://');

    // Estilos del button
    const linkButtonStyles = {
        base: clsx('transition-all transition-colors duration-300 font-secondary inline-flex  gap-2 block'),
        size: {
            sm: 'py-2     px-2    text-sm',
            md: 'py-2.5   px-2.5    text-md   font-semibold',
            lg: 'py-3     px-3 text-lg   font-bold',
        },
        color: {
            default: clsx(
                variant === 'text' && 'bg-transparent text-neutro-base  hover:text-neutro-base/90',
                variant === 'button' && 'bg-neutro-base hover:bg-neutro-base/90 text-neutro-light'
            ),
            white: clsx(
                variant === 'text' && 'bg-transparent text-neutro-shadow hover:text-neutro-shadow/90',
                variant === 'button' && 'bg-neutro-shadow  hover:bg-neutro-shadow/90 text-neutro-base'
            ),
            primary: clsx(
                variant === 'text' && 'bg-transparent text-primary-base hover:text-primary-base/90',
                variant === 'button' && 'bg-primary-base hover:bg-primary-base/90  text-primary-shadow'
            ),
            secondary: clsx(
                variant === 'text' && 'bg-transparent text-secondary-base hover:text-secondary-base/90',
                variant === 'button' && 'bg-secondary-base  hover:bg-secondary-base/90 text-secondary-shadow'
            ),
            accent: clsx(
                variant === 'text' && 'bg-transparent text-accent-base hover:text-accent-base/90',
                variant === 'button' && 'bg-accent-base  hover:bg-accent-base/90  text-accent-shadow'
            ),
            info: clsx(
                variant === 'text' && 'bg-transparent text-info-base hover:text-info-base/90',
                variant === 'button' && 'bg-info-base text-info-shadow  hover:bg-info-base/90'
            ),
            warning: clsx(
                variant === 'text' && 'bg-transparent text-warning-base hover:text-warning-base/90',
                variant === 'button' && 'bg-warning-base hover:bg-warning-base/90 text-warning-shadow'
            ),
            danger: clsx(
                variant === 'text' && 'bg-transparent text-danger-base hover:text-danger-base/90',
                variant === 'button' && 'bg-danger-base  text-danger-shadow hover:bg-danger-base/90'
            ),
            success: clsx(
                variant === 'text' && 'bg-transparent text-success-base hover:text-success-base/90',
                variant === 'button' && 'bg-success-base hover:bg-success-base/90 text-success-shadow'
            ),
        },
        rounded: {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },

        full: full ? 'w-full' : 'w-auto',

        align: {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        },

        disabled: isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    };

    const divStyles = {
        base: 'flex center',
        align: {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        },
        full: full ? 'w-full' : 'w-auto',
    };

    // Estilos en tiempo real
    const currentDiv = clsx(divStyles.base, divStyles.align[align], divStyles.full);

    const currentLinkButton = clsx(
        linkButtonStyles.base,
        linkButtonStyles.color[color],
        linkButtonStyles.size[size],
        linkButtonStyles.rounded[rounded],
        linkButtonStyles.align[align],
        linkButtonStyles.full,
        linkButtonStyles.disabled,
        className
    );

    return (
        <>
            {isExternal ? (
                <a href={to} target="_blank" rel="noopener noreferrer" className={currentDiv} {...props}>
                    <span className={currentLinkButton}> {children} </span>
                </a>
            ) : (
                <Link to={to} {...props} className={currentDiv}>
                    <span className={currentLinkButton}> {children} </span>
                </Link>
            )}
        </>
    );
}
