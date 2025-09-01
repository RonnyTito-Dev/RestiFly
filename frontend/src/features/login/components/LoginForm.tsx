// 📂 src\features\login\components\loginForm.tsx

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoginRequestType } from '../schemas/loginSchema';
import { loginRequestSchema } from '../schemas/loginSchema';
import FloatingInput from '@/components/ui/FloatingInput';
import Button from '@/components/ui/Button';
import { MdEmail, MdLogin } from 'react-icons/md';
import Divider from '@/components/ui/Divider';
import InfoTip from '@/components/ui/InfoTip';
import { newToast } from '@/services/toastService';
import { useLogin } from '../hooks/useLogin';

type LoginFromProps = {
    className?: string;
};

export default function LoginForm({ className }: LoginFromProps) {
    const { hookLogin, loading } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginRequestType>({ resolver: zodResolver(loginRequestSchema), mode: 'onTouched' });

    const onSubmit = handleSubmit(async (loginCredentials) => {
        const { data, error } = await hookLogin(loginCredentials);
        if (error) newToast({ state: 'danger', message: error.message });
        else {
            newToast({ state: 'success', message: data?.message });
        }
    });

    return (
        <div className={`py-8 px-4 bg-neutro-white rounded w-full h-100 ${className}`}>
            <p className="text-2xl text-secondary-base text-center pb-2 font-bold"> Iniciar Sesión </p>
            <span className="block text-neutro-base text-center text-sm pb-6"> Accede y organiza tu trabajo! </span>

            <form onSubmit={onSubmit} className="block space-y-3">
                <FloatingInput
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    size="md"
                    register={register}
                    state="white"
                    rounded="lg"
                    message={errors.email?.message}
                    icon={MdEmail}
                    variant="solid"
                />

                <FloatingInput
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    size="md"
                    register={register}
                    state="white"
                    rounded="lg"
                    message={errors.password?.message}
                    variant="solid"
                />

                <Divider orientation="horizontal" long="full" size="1px" color="transparent" />

                <Button
                    type="submit"
                    color="secondary"
                    variant="solid"
                    size="md"
                    align="center"
                    full
                    isDisabled={!isValid || loading}
                >
                    <MdLogin /> {loading ? 'Cargando...' : 'Iniciar Sesion'}
                </Button>

                <InfoTip
                    trigger="hover"
                    positionPop="bottom"
                    variant="outline"
                    rounded="md"
                    size="sm"
                    messaje="Para recuperar tu contraseña, contacta a un usuario autorizado."
                    color="secondary"
                    className="w-50"
                    align="center"
                >
                    <Button variant="text" color="secondary" size="md" className="">
                        ¿Olvidaste tu contraseña?
                    </Button>
                </InfoTip>
            </form>
        </div>
    );
}
