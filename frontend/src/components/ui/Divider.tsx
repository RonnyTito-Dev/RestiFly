// 📂 frontend\src\components\ui\Divider.tsx

import clsx from 'clsx';

type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    color?:
        | 'default'
        | 'white'
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'info'
        | 'warning'
        | 'danger'
        | 'success'
        | 'transparent';
    size?: string;
    long?: 'sm' | 'md' | 'lg' | 'full';
    align?: 'start' | 'center' | 'end';
    rounded?: boolean;
    className?: string;
};

export default function Divider({
    orientation = 'horizontal',
    variant = 'solid',
    size = '1px',
    long = 'md',
    color = 'default',
    align = 'center',
    rounded = false,
    className,
}: DividerProps) {
    const dividerStyles = {
        base: rounded && 'rounded-full',
        orientation: {
            horizontal: 'border-t',
            vertical: 'border-l',
        },

        variant: {
            solid: '',
            dashed: 'border-dashed',
            dotted: 'border-dotted',
        },

        size: {
            borderWidth: size,
        },

        long: {
            sm: orientation === 'horizontal' ? 'w-1/4' : 'h-8',
            md: orientation === 'horizontal' ? 'w-1/2' : 'h-16',
            lg: orientation === 'horizontal' ? 'w-3/4' : 'h-32',
            full: orientation === 'horizontal' ? 'w-full' : 'h-full',
        },

        color: {
            default: 'border-neutro-base',
            white: 'border-neutro-shadow',
            primary: 'border-primary-border',
            secondary: 'border-secondary-border',
            accent: 'border-accent-border',
            info: 'border-info-border',
            warning: 'border-primary-border',
            danger: 'border-danger-border',
            success: 'border-success-border',
            transparent: 'border-transparent',
        },

        align: {
            start: clsx(orientation === 'horizontal' ? 'mr-auto' : 'mt-0'),
            center: clsx(orientation) === 'horizontal' ? 'mx-auto' : 'my-auto',
            end: clsx(orientation === 'horizontal' ? 'ml-auto' : 'mb-0'),
        },
    };

    const currentDivider = clsx(
        dividerStyles.base,
        dividerStyles.orientation[orientation],
        dividerStyles.variant[variant],
        dividerStyles.long[long],
        dividerStyles.color[color],
        dividerStyles.align[align],
        className
    );

    return <div className={currentDivider} style={dividerStyles.size}></div>;
}
