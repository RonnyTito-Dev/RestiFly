// 📂 src/components/ui/FloatingInput.tsx
import React from 'react';
import clsx from 'clsx';

type FloatingInputProps = {
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export default function FloatingInput({
    label,
    type = 'text',
    size = 'md',
    variant = 'primary',
    disabled = false,
    value = '',
    onChange,
    className,
}: FloatingInputProps) {
    const sizeStyles: Record<string, string> = {
        sm: 'h-10 text-sm px-2',
        md: 'h-12 text-base px-3',
        lg: 'h-14 text-lg px-4',
    };

    const variantStyles: Record<string, string> = {
        primary: 'border-[var(--color-primary-base)] focus:border-[var(--color-primary-hover)]',
        secondary: 'border-[var(--color-secondary-base)] focus:border-[var(--color-secondary-hover)]',
        accent: 'border-[var(--color-accent-base)] focus:border-[var(--color-accent-hover)]',
        info: 'border-[var(--color-info-base)] focus:border-[var(--color-info-hover)]',
        success: 'border-[var(--color-success-base)] focus:border-[var(--color-success-hover)]',
        warning: 'border-[var(--color-warning-base)] focus:border-[var(--color-warning-hover)]',
        danger: 'border-[var(--color-danger-base)] focus:border-[var(--color-danger-hover)]',
    };

    const inputStyles = clsx(
        'peer block w-full border rounded-md bg-transparent pt-4 pb-1 placeholder-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
    );

    const labelStyles = clsx(
        'absolute left-3 text-gray-400 transition-all',
        'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400',
        'peer-focus:top-1 peer-focus:text-sm peer-focus:text-[var(--color-primary-base)]'
    );

    return (
        <div className="relative w-full">
            <input
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={label}
                className={inputStyles}
            />
            <label className={labelStyles}>{label}</label>
        </div>
    );
}
