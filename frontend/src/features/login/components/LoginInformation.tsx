// 📂 src\features\login\components\LoginInformation.tsx

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import clsx from 'clsx';
import fooSecuence from '@/assets/food-sequence.lottie';
import InfoTip from '@/components/ui/InfoTip';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

export default function LoginInformation({ className }: { className?: string }) {
    // Estilos en tiempo real
    const currentLoginInformation = clsx(
        'rounded h-100 py-8  bg-gradient-to-br from-primary-base/95 to-secondary-base/80',
        className
    );

    return (
        <div className={currentLoginInformation}>
            <span className="font-primary block font-bold text-2xl text-secondary-shadow mb-1 text-center transition-all">
                {' '}
                RestiFly{' '}
            </span>
            <Divider color="white" long="sm" className="mt-3 mb-4" />

            <DotLottieReact className="w-full h-50" src={fooSecuence} loop autoplay />

            <Divider color="transparent" size="6px" />

            <InfoTip
                trigger="hover"
                positionPop="bottom"
                variant="outline"
                rounded="md"
                size="sm"
                messaje="Solo un usuario autorizado puede registrarte."
                color="white"
                className="w-40"
                align="center"
            >
                <Button variant="text" color="white" size="md">
                    ¿Aún no tienes cuenta?
                </Button>
            </InfoTip>
        </div>
    );
}
