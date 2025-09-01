// 📂 src\components\ui\ToastContainer.tsx

import type { ToastProps } from './Toast';
import { useCallback, useState, useEffect } from 'react';
import Toast from './Toast';
import { subscribe } from '@/services/toastService';

export default function ToastContainer() {
    // Almacenar los toast en array
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    // Funcion para quitar un tast
    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    // Use effect
    useEffect(() => {
        const unsubscribe = subscribe((toast) => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, ...toast, onClose: () => removeToast(id) }]);
        });

        return unsubscribe;
    }, [removeToast]);

    // Funcion nuevo toast
    // const newToast = useCallback(
    //     (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    //         const id = Date.now();

    // Agregar el array toast
    //         setToasts((prev) => [...prev, { id, ...toast, onClose: () => removeToast(id) }]);
    //     },
    //     [removeToast]
    // );

    return (
        <div className="absolute top-2 right-2 flex flex-col z-50 gap-2">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} />
            ))}
        </div>
    );
}
