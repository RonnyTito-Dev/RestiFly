// 📂 src/components/ui/FloatingInput.tsx

import clsx from 'clsx';
import type { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import type { IconType } from 'react-icons';
import { useState } from 'react';
import { IoEyeOff, IoEye } from 'react-icons/io5';

// Tipamos props
type InputProps<T extends FieldValues> = {
    id: string;
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    name: Path<T>;
    register?: UseFormRegister<T>;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    state?: 'default' | 'white' | 'primary' | 'secondary' | 'info' | 'error' | 'success';
    message?: string;
    isDisabled?: boolean;
    icon?: IconType;
    variant?: 'solid' | 'outline';
};

// Funcion del componente
export default function FloatingInput<T extends FieldValues>({
    id,
    label,
    type = 'text',
    name,
    register,
    size = 'md',
    rounded = 'none',
    state = 'default',
    message = '',
    isDisabled = false,
    icon: Icon,
    variant = 'solid',
}: InputProps<T>) {
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    // =============================  Estilos del input =============================
    const inputStyles = {
        base: clsx(
            'peer w-full font-secondary font-semibold outline-none',
            variant === 'solid' ? 'border-0' : 'border-2'
        ),

        size: {
            sm: clsx('text-xs px-3 pt-5.5 pb-1.5'),
            md: clsx('text-sm px-3 pt-6 pb-1.5'),
            lg: clsx('text-base px-3 pt-7 pb-2'),
        },

        state: {
            default: clsx(
                variant === 'solid'
                    ? 'bg-neutro-base   hover:bg-neutro-base/95 focus:bg-neutro-base/95   text-neutro-light-hover'
                    : 'bg-neutro-border   border-neutro-base/70  hover:border-neutro-base focus:border-neutro-base   text-neutro-base'
            ),
            white: clsx(
                variant === 'solid'
                    ? 'bg-neutro-light  hover:bg-neutro-light-hover focus:bg-neutro-light-hover  text-neutro-hover'
                    : 'bg-neutro-shadow   border-neutro-light-hover hover:border-neutro-border  focus:border-neutro-border  text-neutro-base'
            ),
            primary: clsx(
                variant === 'solid'
                    ? 'bg-primary-base  hover:bg-primary-base/85  focus:bg-primary-base/85   text-neutro-hover'
                    : 'bg-primary-shadow  border-primary-border  hover:border-primary-base focus:border-primay-base text-primary-hover'
            ),
            secondary: clsx(
                variant === 'solid'
                    ? 'bg-secondary-base/95  hover:bg-secondary-base/85 focus:bg-secondary-base/85 text-secondary-shadow'
                    : 'bg-secondary-shadow  border-secondary-border hover:border-secondary-base/85 focus:border-secondary-base/85 text-secondary-base/85'
            ),
            info: clsx(
                variant === 'solid'
                    ? 'bg-info-base hover:bg-info-base/90 focus:bg-info-base/90 text-info-shadow'
                    : 'bg-info-light  border-info-border  hover:border-info-base focus:border-info-base  text-info-base'
            ),
            error: clsx(
                variant === 'solid'
                    ? 'bg-danger-base   hover:bg-danger-base/85 focus:bg-danger-base/85  text-neutro-light'
                    : 'bg-danger-shadow   border-danger-border hover:border-danger-base  focus:border-danger-base   text-danger-base  '
            ),
            success: clsx(
                variant === 'solid'
                    ? 'bg-success-base   hover:bg-success-base/90  focus:bg-success-base/90  text-neutro-light'
                    : 'bg-success-shadow  border-success-border  hover:border-success-base focus:border-success-base   text-success-base'
            ),
        },

        rounded: {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },

        disabled: 'opacity-50 cursor-not-allowed',
    };

    // ============================= Estilos del label =============================
    const labelStyles = {
        base: 'absolute font-secondary cursor-text transition-all top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none',

        size: {
            sm: clsx(
                'left-3 text-xs peer-focus:top-3.5 peer-focus:text-xs not-peer-placeholder-shown:top-3.5 not-peer-placeholder-shown:text-xs'
            ),
            md: clsx(
                'left-3 text-sm  peer-focus:top-4 peer-focus:text-sm  not-peer-placeholder-shown:top-4 not-peer-placeholder-shown:text-sm'
            ),
            lg: clsx(
                'left-3 text-base  peer-focus:top-4.5 peer-focus:text-base  not-peer-placeholder-shown:top-4.5 not-peer-placeholder-shown:text-base'
            ),
        },

        state: {
            default: 'text-neutro-light-hover',
            white: 'text-neutro-base',
            error: 'text-neutro-light-hover',
            success: 'text-neutro-light-hover',
        },
    };

    // ============================= Estilos del icono =============================
    const iconStyles = {
        base: 'absolute top-1/2 -translate-y-1/2 bg-transparent  hover:bg-transparent border-0',

        size: {
            sm: 'text-sm right-3',
            md: 'text-base right-3',
            lg: 'text-lg right-3',
        },

        state: {
            default: clsx(variant === 'solid' ? 'text-neutro-light-hover' : 'text-neutro-base'),
            white: 'text-neutro-base',
            error: clsx(variant === 'solid' ? 'text-neutro-light-hover' : 'text-danger-base'),
            success: clsx(variant === 'solid' ? 'text-neutro-light-hover' : 'text-success-base'),
        },
    };

    // Estilos en tiempo real
    const currentInput = clsx(
        inputStyles.base,
        inputStyles.size[size],
        message.length ? inputStyles.state.error : inputStyles.state[state],
        inputStyles.rounded[rounded],
        isDisabled && inputStyles.disabled
    );

    const currentLabel = clsx(
        labelStyles.base,
        labelStyles.size[size],
        message.length ? inputStyles.state.error : inputStyles.state[state]
    );

    const currentIcon = clsx(
        iconStyles.base,
        iconStyles.size[size],
        message.length ? iconStyles.state.error : inputStyles.state[state]
    );

    const currentMessage = 'relative left-3 text-danger-base text-sm';

    return (
        <div className="w-full">
            <div className="relative">
                {type === 'password' ? (
                    viewPassword ? (
                        <IoEye
                            onClick={() => setViewPassword(!viewPassword)}
                            className={clsx(currentIcon, 'cursor-pointer')}
                        />
                    ) : (
                        <IoEyeOff
                            onClick={() => setViewPassword(!viewPassword)}
                            className={clsx(currentIcon, 'cursor-pointer')}
                        />
                    )
                ) : (
                    Icon && <Icon className={currentIcon} />
                )}
                <input
                    id={id}
                    type={type === 'password' ? (viewPassword ? 'text' : 'password') : type}
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
