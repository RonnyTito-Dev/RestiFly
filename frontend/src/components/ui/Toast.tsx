// 📂 src\components\ui\Toast.tsx

import { useState, useEffect } from 'react';
import { FaCircleCheck, FaTriangleExclamation, FaCircleXmark, FaCircleInfo, FaXmark } from 'react-icons/fa6';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastProps = {
    id: number;
    title?: string;
    message?: string;
    color?: 'default' | 'white' | 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'danger' | 'success';
    variant?: 'solid' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    state?: 'info' | 'warning' | 'danger' | 'success';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    duration?: number;
    onClose: () => void;
};

export default function Toast({
    title,
    message,
    state = 'success',
    color,
    variant = 'solid',
    size = 'md',
    rounded = 'md',
    duration = 3000,
    onClose,
}: ToastProps) {
    const [visibleToast, setVisibleToast] = useState<boolean>(true);
    const [closeButton, setCloseButton] = useState<boolean>(false);

    // Effect del Toast
    useEffect(() => {
        if (!duration) return;

        const timerId = setTimeout(() => {
            setVisibleToast(false);
            onClose();
        }, duration);

        return () => clearTimeout(timerId);
    }, [duration, visibleToast, onClose]);

    if (!visibleToast) return;

    // Armando titulo
    const currentTitle = title
        ? title
        : state === 'success'
        ? 'Éxito'
        : state === 'warning'
        ? 'Advertencia'
        : state === 'danger'
        ? 'Error'
        : state === 'info'
        ? 'Información'
        : 'Toast';

    // Estilos del Toast
    const toastDivStyles = {
        base: clsx('flex gap-1  cursor-pointer  w-70 transtion-all duration-300', variant === 'outline' && 'border-2'),
        color: {
            default: clsx(
                variant === 'solid' && 'bg-neutro-base hover:bg-neutro-base/90  text-neutro-light',
                variant === 'outline' &&
                    'bg-neutro-border border-neutro-base hover:border-neutro-base/90 hover:bg-neutro-base/90 text-neutro-base hover:text-neutro-light'
            ),
            white: clsx(
                variant === 'solid' && 'bg-neutro-shadow  hover:bg-neutro-shadow/90 text-neutro-base',
                variant === 'outline' &&
                    'bg-neutro-shadow  border-neutro-light-hover  hover:bg-neutro-light-hover text-neutro-base'
            ),
            primary: clsx(
                variant === 'solid' && 'bg-primary-base hover:bg-primary-base/90  text-primary-shadow',
                variant === 'outline' &&
                    'bg-primary-shadow border-primary-base  text-primary-hover   hover:bg-primary-base hover:text-primary-shadow'
            ),
            secondary: clsx(
                variant === 'solid' && 'bg-secondary-base  hover:bg-secondary-base/90 text-secondary-shadow',
                variant === 'outline' &&
                    'bg-secondary-shadow hover:bg-secondary-base/90 border-secondary-base/90 text-secondary-base/90  hover:text-secondary-shadow'
            ),
            accent: clsx(
                variant === 'solid' && 'bg-accent-base  hover:bg-accent-base/90  text-accent-shadow',
                variant === 'outline' &&
                    'bg-accent-shadow border-accent-base  text-accent-base  hover:bg-accent-base hover:text-accent-shadow'
            ),
            info: clsx(
                variant === 'solid' && 'bg-info-base text-info-shadow  hover:bg-info-base/90',
                variant === 'outline' &&
                    'bg-info-light border-info-base text-info-base  hover:bg-info-base hover:text-info-shadow'
            ),
            warning: clsx(
                variant === 'solid' && 'bg-warning-base hover:bg-warning-base/90 text-warning-shadow',
                variant === 'outline' &&
                    'bg-warning-shadow border-warning-base text-warning-base   hover:bg-warning-base hover:text-warning-shadow'
            ),
            danger: clsx(
                variant === 'solid' && 'bg-danger-base  text-danger-shadow hover:bg-danger-base/90',
                variant === 'outline' &&
                    'bg-danger-light border-danger-base text-danger-base hover:bg-danger-base hover:text-danger-shadow'
            ),
            success: clsx(
                variant === 'solid' && 'bg-success-base hover:bg-success-base/90 text-success-shadow',
                variant === 'outline' &&
                    'bg-success-light border-success-base text-success-base hover:bg-success-base hover:text-success-shadow'
            ),
        },

        size: {
            sm: 'p-1.5  hover:scale-101',
            md: 'p-1.5  hover:scale-102',
            lg: 'p-1.5  hover:scale-103',
        },

        rounded: {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },
    };

    const toastIconStyles = {
        base: '',

        size: {
            sm: 'text-2xl',
            md: 'text-3xl',
            lg: 'text-[34px]',
        },
    };

    const toastTitleStyles = {
        base: 'block',

        size: {
            sm: 'text-xs font-bold',
            md: 'text-sm font-bold',
            lg: 'text-base font-bold',
        },
    };

    const toastMessageStyles = {
        base: 'block',

        size: {
            sm: 'text-xs font-normal',
            md: 'text-sm font-normal',
            lg: 'text-base font-normal',
        },
    };

    // Estilos en tiempo real
    const currentToastDiv = clsx(
        toastDivStyles.base,
        toastDivStyles.color[color ? color : state],
        toastDivStyles.size[size],
        toastDivStyles.rounded[rounded]
    );
    const currentToastIcon = clsx(toastIconStyles.base, toastIconStyles.size[size]);
    const currentToastTitle = clsx(toastTitleStyles.base, toastTitleStyles.size[size]);
    const currentToastMessage = clsx(toastMessageStyles.base, toastMessageStyles.size[size]);

    return (
        <AnimatePresence>
            {visibleToast && (
                <motion.div
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={currentToastDiv}
                    onMouseEnter={() => setCloseButton(true)}
                    onMouseLeave={() => setCloseButton(false)}
                >
                    <div className="w-1/5 flex justify-center items-center text-inherit ">
                        {state === 'info' && <FaCircleInfo className={currentToastIcon} />}
                        {state === 'warning' && <FaTriangleExclamation className={currentToastIcon} />}
                        {state === 'danger' && <FaCircleXmark className={currentToastIcon} />}
                        {state === 'success' && <FaCircleCheck className={currentToastIcon} />}
                    </div>

                    <div className="w-4/5 text-inherit">
                        <span className={currentToastTitle}>{currentTitle}</span>
                        <span className={currentToastMessage}>{message}</span>
                    </div>

                    {closeButton && (
                        <FaXmark
                            className="absolute top-1 right-1 text-xl transition-all duration-200"
                            onClick={() => {
                                setVisibleToast(false);
                                onClose();
                            }}
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
