// 📂 src\components\ui\Typografia.tsx
import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    weight?: 'regular' | 'medium' | 'bold';
    font?: 'primary' | 'secondary';
    align?: 'left' | 'center' | 'right' | 'justify';
    className?: string;
    children: React.ReactNode;
};

export default function Typography({
    as: Tag = 'p',
    size = 'md',
    weight = 'regular',
    font = 'primary',
    align = 'center',
    className,
    children,
}: TypographyProps) {
    const sizeStyles: Record<string, string> = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
    };

    const weightStyles: Record<string, string> = {
        regular: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
    };

    const fontStyles: Record<string, string> = {
        primary: 'font-primary',
        secondary: 'font-secondary',
    };

    const alignStyles: Record<string, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    const applyStyles = clsx(sizeStyles[size], weightStyles[weight], fontStyles[font], alignStyles[align], className);

    return <Tag className={applyStyles}> {children} </Tag>;
}
