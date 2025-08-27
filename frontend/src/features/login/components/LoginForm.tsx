// 📂 src\features\login\components\loginForm.tsx

import { useForm } from 'react-hook-form';
import type { LoginSchemaType } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import FloatingInput from '../../../components/ui/FloatingInput';
import Button from '../../../components/ui/Button';

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
                <FloatingInput
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    register={register}
                    state="white"
                    message={errors.email?.message}
                />
                <FloatingInput
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    register={register}
                    state="white"
                    message={errors.password?.message}
                />

                <Button type="submit" variant="secondary_solid" disabled={!isValid}>
                    Iniciar Sesion
                </Button>
            </form>
        </div>
    );
}
