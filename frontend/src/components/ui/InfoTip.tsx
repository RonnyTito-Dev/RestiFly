// 📂 src\components\ui\InfoTip.tsx

import type { ReactNode } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

type InfoTipProps = {
    messaje: string;
    children: ReactNode;
    trigger?: 'click' | 'hover';
    positionPop?: 'top-left' | 'top' | 'top-right' | 'right' | 'left' | 'bottom-left' | 'bottom' | 'bottom-right';
    variant?: 'solid' | 'outline';
    color?: 'default' | 'white' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'danger' | 'success';
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    align?: 'left' | 'center' | 'right';
    className?: string;
};

export default function InfoTip({
    messaje,
    trigger = 'hover',
    positionPop = 'top',
    variant = 'solid',
    color = 'default',
    rounded = 'md',
    size = 'md',
    align = 'left',
    isDisabled = false,
    className,
    children,
}: InfoTipProps) {
    const [open, setOpen] = useState<boolean>(false);

    // Conjunto de estilos
    const infoTipStyles = {
        base: clsx('absolute z-20 m-0.5', variant === 'outline' && 'border-2'),

        positionPop: {
            'top-left': 'bottom-full right-full',
            top: 'bottom-full',
            'top-right': 'bottom-full left-full',
            left: 'right-full top-1/2 -translate-y-1/2',
            right: 'left-full top-1/2 -translate-y-1/2',
            'bottom-left': 'top-full right-full',
            bottom: 'top-full',
            'bottom-right': 'top-full left-full',
        },

        size: {
            sm: 'text-xs  py-1 px-1.5',
            md: 'text-sm  py-1 px-2',
            lg: 'text-base py-1.5 px-2.5',
        },

        color: {
            default:
                variant === 'solid'
                    ? 'bg-neutro-hover text-neutro-shadow '
                    : 'bg-neutro-border border-neutro-base text-neutro-base',
            white:
                variant === 'solid'
                    ? 'bg-neutro-light text-neutro-hover'
                    : 'bg-neutro-shadow border-neutro-border text-neutro-base',
            primary:
                variant === 'solid'
                    ? 'bg-primary-base text-primary-shadow'
                    : 'bg-primary-shadow border-primary-base text-primary-hover',
            secondary:
                variant === 'solid'
                    ? 'bg-secondary-base text-secondary-shadow'
                    : 'bg-secondary-shadow border-secondary-base/90  text-secondary-base/90',
            accent:
                variant === 'solid'
                    ? 'bg-accent-base text-accent-shadow'
                    : 'bg-accent-shadow border-accent-base text-accent-base',
            info:
                variant === 'solid' ? 'bg-info-base text-info-shadow' : 'bg-info-light border-info-base text-info-base',
            warning:
                variant === 'solid'
                    ? 'bg-warning-base text-warning-shadow'
                    : 'bg-warning-light border-warning-base text-warning-base',
            danger:
                variant === 'solid'
                    ? 'bg-danger-base text-danger-shadow'
                    : 'bg-danger-light border-danger-base text-danger-base',
            success:
                variant === 'solid'
                    ? 'bg-success-base text-success-shadow'
                    : 'bg-success-light border-success-base text-success-base',
        },

        rounded: {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },

        disabled: isDisabled && 'cursor-not-allowed opacity-50',
    };

    const divStiles = {
        base: 'relative cursor-pointer w-fit  flex justify-center items-center text-center',
        align: {
            left: '',
            center: 'left-1/2 -translate-x-1/2',
            right: 'left-full -translate-x-full',
        },
    };

    // Estilos en tiempo real
    const currentInfoTip = clsx(
        infoTipStyles.base,
        infoTipStyles.positionPop[positionPop],
        infoTipStyles.size[size],
        infoTipStyles.color[color],
        infoTipStyles.rounded[rounded],
        infoTipStyles.disabled,
        className
    );

    const currentDiv = clsx(divStiles.base, divStiles.align[align]);

    return (
        <div
            className={currentDiv}
            onMouseEnter={trigger === 'hover' ? () => setOpen(true) : undefined}
            onMouseLeave={trigger === 'hover' ? () => setOpen(false) : undefined}
            onClick={trigger === 'click' ? () => setOpen((prev) => !prev) : undefined}
        >
            {children}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="tooltip"
                        initial={{ opacity: 0, y: 0, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 0, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className={currentInfoTip}
                    >
                        <span>{messaje}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
