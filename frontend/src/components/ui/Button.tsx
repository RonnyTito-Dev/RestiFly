// 📂 src\components\ui\Button.tsx

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: 'solid' | 'outline' | 'text' | 'ghost';
    color?: 'default' | 'white' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    full?: boolean;
    align?: 'left' | 'center' | 'right';
    isDisabled?: boolean;
    className?: string;
    onClick?: () => void;
};

export default function Button({
    children,
    variant = 'solid',
    color = 'default',
    size = 'md',
    rounded = 'md',
    full = false,
    align = 'center',
    isDisabled = false,
    onClick,
    className,
    ...props
}: ButtonProps) {
    // Estilos del button
    const buttonStyles = {
        base: clsx(
            'transition-all transition-colors duration-300 font-secondary inline-flex  gap-2 block',
            (variant === 'outline' || variant === 'ghost') && 'border-2'
        ),
        size: {
            sm: 'py-2     px-2    text-xs font-medium',
            md: 'py-2.5   px-2.5    text-sm  font-semibold',
            lg: 'py-3     px-3 text-base   font-bold',
        },
        color: {
            default: clsx(
                variant === 'solid' && 'bg-neutro-base hover:bg-neutro-base/90 text-neutro-light',
                variant === 'text' && 'bg-transparent text-neutro-base  hover:text-neutro-base/90',
                variant === 'outline' &&
                    'bg-neutro-border border-neutro-base/90  hover:bg-neutro-base/90 text-neutro-base hover:text-neutro-light',
                variant === 'ghost' &&
                    'bg-tranparent  border-neutro-base hover:border-neutro-base/90 text-neutro-base hover:text-neutro-base/90'
            ),
            white: clsx(
                variant === 'solid' && 'bg-neutro-shadow  hover:bg-neutro-shadow/90 text-neutro-base',
                variant === 'text' && 'bg-transparent text-neutro-shadow hover:text-neutro-shadow/90',
                variant === 'outline' &&
                    'bg-neutro-shadow  border-neutro-light-hover  hover:bg-neutro-light-hover text-neutro-base',
                variant === 'ghost' &&
                    'bg-transparent border-neutro-shadow hover:border-neutro-shadow/90 text-neutro-shadow hover:text-neutro-shadow/90'
            ),
            primary: clsx(
                variant === 'solid' && 'bg-primary-base hover:bg-primary-base/90  text-primary-shadow',
                variant === 'text' && 'bg-transparent text-primary-base hover:text-primary-base/90',
                variant === 'outline' &&
                    'bg-primary-shadow border-primary-base  text-primary-hover   hover:bg-primary-base hover:text-primary-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-primary-base hover:border-primary-base/90 text-primary-base hover:text-primary-base/90'
            ),
            secondary: clsx(
                variant === 'solid' && 'bg-secondary-base  hover:bg-secondary-base/90 text-secondary-shadow',
                variant === 'text' && 'bg-transparent text-secondary-base hover:text-secondary-base/90',
                variant === 'outline' &&
                    'bg-secondary-shadow hover:bg-secondary-base/90 border-secondary-base/90 text-secondary-base/90  hover:text-secondary-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-secondary-base hover:border-secondary-base/90 text-secondary-base hover:text-secondary-base/90'
            ),
            accent: clsx(
                variant === 'solid' && 'bg-accent-base  hover:bg-accent-base/90  text-accent-shadow',
                variant === 'text' && 'bg-transparent text-accent-base hover:text-accent-base/90',
                variant === 'outline' &&
                    'bg-accent-shadow border-accent-base  text-accent-base  hover:bg-accent-base hover:text-accent-shadow',
                variant === 'ghost' &&
                    'bg-transaparent border-accent-base hover:border-accent-base/90 text-accent-base hover:text-accent-base/90'
            ),
            info: clsx(
                variant === 'solid' && 'bg-info-base text-info-shadow  hover:bg-info-base/90',
                variant === 'text' && 'bg-transparent text-info-base hover:text-info-base/90',
                variant === 'outline' &&
                    'bg-info-light border-info-base text-info-base  hover:bg-info-base hover:text-info-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-info-base hover:border-info-base/90  text-info-base hover:text-info-base/90'
            ),
            warning: clsx(
                variant === 'solid' && 'bg-warning-base hover:bg-warning-base/90 text-warning-shadow',
                variant === 'text' && 'bg-transparent text-warning-base hover:text-warning-base/90',
                variant === 'outline' &&
                    'bg-warning-shadow border-warning-base text-warning-base   hover:bg-warning-base hover:text-warning-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-warning-base hover:border-warning-base/90 text-warning-base hover:text-warning-base/90'
            ),
            danger: clsx(
                variant === 'solid' && 'bg-danger-base  text-danger-shadow hover:bg-danger-base/90',
                variant === 'text' && 'bg-transparent text-danger-base hover:text-danger-base/90',
                variant === 'outline' &&
                    'bg-danger-light border-danger-base text-danger-base hover:bg-danger-base hover:text-danger-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-danger-base hover:border-danger-base text-danger-base hover:text-danger-base/90'
            ),
            success: clsx(
                variant === 'solid' && 'bg-success-base hover:bg-success-base/90 text-success-shadow',
                variant === 'text' && 'bg-transparent text-success-base hover:text-success-base/90',
                variant === 'outline' &&
                    'bg-success-light border-success-base text-success-base hover:bg-success-base hover:text-success-shadow',
                variant === 'ghost' &&
                    'bg-transparent border-success-base text-success-base hover:border-success-base/90 hover:text-success-base/90'
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

    const currentButton = clsx(
        buttonStyles.base,
        buttonStyles.color[color],
        buttonStyles.size[size],
        buttonStyles.rounded[rounded],
        buttonStyles.align[align],
        buttonStyles.full,
        buttonStyles.disabled,
        className
    );

    return (
        <div className={currentDiv}>
            <button {...props} className={currentButton} disabled={isDisabled} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}
