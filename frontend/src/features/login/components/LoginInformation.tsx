// 📂 src\features\login\components\LoginInformation.tsx

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type LoginInformationProps = {
    className?: string;
};

export default function LoginInformation({ className }: LoginInformationProps) {
    return (
        <div className={` w-full h-full rounded  ${className}`}>
            <DotLottieReact src="images/login-lottie.lottie" loop autoplay />
        </div>
    );
}
