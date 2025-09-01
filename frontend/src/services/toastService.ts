// 📂 src\services\toastService.ts

import type { ToastProps } from '@/components/ui/Toast';

type ToastListener = (toast: Omit<ToastProps, 'id' | 'onClose'>) => void;

let listeners: ToastListener[] = [];

// Lista de toasts
export const subscribe = (listener: ToastListener) => {
    listeners.push(listener);
    return () => {
        listeners = listeners.filter((l) => l !== listener);
    };
};

// Funcion para crear nuevo toast
export const newToast = (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    listeners.forEach((listener) => listener(toast));
};
