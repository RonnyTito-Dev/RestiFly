// 📂 src\components\ui\Button.tsx

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?:
        | 'primary_solid'
        | 'secondary_solid'
        | 'accent_solid'
        | 'info_solid'
        | 'warning_solid'
        | 'danger_solid'
        | 'success_solid'
        | 'primary_outline'
        | 'secondary_outline'
        | 'accent_outline'
        | 'info_outline'
        | 'warning_outline'
        | 'danger_outline'
        | 'success_outline';
    size?: 'sm' | 'md' | 'lg';
    align?: 'left' | 'center' | 'right';
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button({
    children,
    variant = 'primary_solid',
    size = 'md',
    align = 'center',
    disabled = false,
    onClick,
    ...props
}: ButtonProps) {
    const baseStyle = 'rounded font-primary font-medium transition-colors duration-300 overflow-hidden';

    const variantStyles: Record<string, string> = {
        primary_solid: 'bg-primary-base text-white hover:bg-primary-hover active:bg-white/20',
        secondary_solid: 'bg-secondary-base text-white hover:bg-secondary-hover active:bg-white/20',
        accent_solid: 'bg-accent-base text-white hover:bg-accent-hover active:bg-white/20',
        info_solid: 'bg-info-base text-white hover:bg-info-hover active:bg-white/20',
        warning_solid: 'bg-warning-base text-white hover:bg-warning-hover active:bg-white/20',
        success_solid: 'bg-success-base text-white hover:bg-success-hover active:bg-white/20',
        danger_solid: 'bg-danger-base text-white hover:bg-danger-hover active:bg-white/20',
        primary_outline:
            'bg-transparent border-2 border-primary-base text-primary-base hover:bg-primary-base hover:text-neutro-white active:bg-white/20',
        secondary_outline:
            'bg-transparent border-2 border-secondary-base text-secondary-base hover:bg-secondary-base hover:text-neutro-white active:bg-white/20',
        accent_outline:
            'bg-transparent border-2 border-accent-base text-accent-base hover:bg-accent-base hover:text-neutro-white active:bg-white/20',
        info_outline:
            'bg-transparent border-2 border-info-base text-info-base hover:bg-info-base hover:text-neutro-white active:bg-white/20',
        warning_outline:
            'bg-transparent border-2 border-warning-base text-warning-base hover:bg-warning-base hover:text-neutro-white active:bg-white/20',
        success_outline:
            'bg-transparent border-2 border-success-base text-success-base hover:bg-success-base hover:text-neutro-white active:bg-white/20',
        danger_outline:
            'bg-transparent border-2 border-danger-base text-danger-base hover:bg-danger-base hover:text-neutro-white active:bg-white/20',
    };

    const sizeStyles: Record<string, string> = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-2 text-lg',
    };

    const alignStyles: Record<string, string> = {
        left: 'self-start',
        center: 'self-center',
        right: 'self-end',
    };

    const styleButton = clsx(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        alignStyles[align],
        !disabled && 'cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed'
    );

    return (
        <button {...props} className={styleButton} disabled={disabled} onClick={onClick}>
            {' '}
            {children}{' '}
        </button>
    );
}
