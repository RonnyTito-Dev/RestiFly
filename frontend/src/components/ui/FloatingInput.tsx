// 📂 src/components/ui/FloatingInput.tsx

import clsx from 'clsx';
import type { Path, FieldValues, UseFormRegister } from 'react-hook-form';

// Tipamos props
type InputProps<T extends FieldValues> = {
    id: string;
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    name: Path<T>;
    register?: UseFormRegister<T>;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    state?: 'default' | 'white' | 'error' | 'success';
    message?: string;
    isDisabled?: boolean;
};

// Funcion del componente
export default function FloatingInput<T extends FieldValues>({
    id,
    label,
    type = 'text',
    name,
    register,
    size = 'md',
    rounded = 'md',
    state = 'default',
    message = '',
    isDisabled = false,
}: InputProps<T>) {
    const baseStyleInput = 'peer w-full font-secondary font-semibold';
    const baseStyleLabel = 'absolute font-secondary cursor-text transition-all top-1/2 -translate-y-1/2';

    const sizeStylesInput: Record<string, string> = {
        sm: 'text-sm px-3 pt-5.5 pb-1.5 outline-none',
        md: 'text-base px-3 pt-6 pb-2 outline-none',
        lg: 'text-lg px-4 pt-7 pb-3 outline-none',
    };

    const stateStylesInput: Record<string, string> = {
        default: 'bg-neutro-base text-neutro-light-hover   hover:bg-neutro-base/95',
        white: 'bg-neutro-light text-neutro-hover   hover:bg-neutro-light-hover',
        error: 'bg-danger-base text-neutro-light    hover:bg-danger-base/90',
        success: 'bg-success-base text-neutro-light  hover:bg-success-base/90',
    };

    const roundedStylesInput: Record<string, string> = {
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
    };

    const sizeStylesLabel: Record<string, string> = {
        sm: 'left-3 text-sm peer-focus:top-3.5 peer-focus:text-xs not-peer-placeholder-shown:top-3.5 not-peer-placeholder-shown:text-xs',
        md: 'left-3 text-base  peer-focus:top-4 peer-focus:text-sm  not-peer-placeholder-shown:top-4 not-peer-placeholder-shown:text-sm',
        lg: 'left-4 text-lg  peer-focus:top-4.5 peer-focus:text-base  not-peer-placeholder-shown:top-4.5 not-peer-placeholder-shown:text-base',
    };

    const stateStylesLabel: Record<string, string> = {
        default: 'text-neutro-light-hover',
        white: 'text-neutro-base',
        error: 'text-neutro-light-hover',
        success: 'text-neutro-light-hover',
    };

    const disabledInput = 'opacity-50 cursor-not-allowed';

    const currentInput = clsx(
        baseStyleInput,
        sizeStylesInput[size],
        message?.length ? stateStylesInput['error'] : stateStylesInput[state],
        roundedStylesInput[rounded],
        isDisabled && disabledInput
    );
    const currentLabel = clsx(
        baseStyleLabel,
        sizeStylesLabel[size],
        message ? stateStylesLabel['error'] : stateStylesLabel[state]
    );
    const currentMessage = 'relative left-3 text-danger-base text-sm';

    return (
        <div className="w-full">
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    placeholder=" "
                    {...(register && name ? register(name) : {})}
                    className={currentInput}
                    disabled={isDisabled}
                />
                <label htmlFor={id} className={currentLabel}>
                    {label}
                </label>
            </div>
            {message && <span className={currentMessage}> {message} </span>}
        </div>
    );
}
