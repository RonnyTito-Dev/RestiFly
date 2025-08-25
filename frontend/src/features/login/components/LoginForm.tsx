// 📂 src\features\login\components\loginForm.tsx

import { useForm } from 'react-hook-form';
import type { LoginSchemaType } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import { Input, Button } from '@heroui/react';

type LoginFromProps = {
    className?: string;
};

export default function LoginForm({ className }: LoginFromProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema), mode: 'onTouched' });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className={`py-10 px-5 bg-white rounded w-full ${className}`}>
            <p className="text-2xl text-secondary-base text-center pb-3 font-bold"> Inicia Sesion </p>
            <span className="block text-neutro-base text-center text-sm pb-8"> Ingresa a tu dashboard! </span>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Input label="Email" radius="sm" size="sm" {...register('email')} />
                {errors.email && <p className="text-[12px] text-danger-base px-2"> {errors.email.message} </p>}

                <Input label="Password" radius="sm" type="password" size="sm" {...register('password')} />
                {errors.password && <p className="text-[12px] text-danger-base px-2"> {errors.password.message} </p>}

                <Button type="submit" radius="sm" className="bg-primary-base mt-2" isDisabled={!isValid}>
                    Iniciar Sesion
                </Button>
            </form>
        </div>
    );
}
