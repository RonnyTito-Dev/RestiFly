// 📂 src\features\login\pages\LoginPage.tsx

import LoginForm from '../components/LoginForm';
import LoginInformation from '../components/LoginInformation';

export default function LoginPage() {
    return (
        <div className="w-full h-[100vh] bg-[url('/images/background.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-base/30 to-secondary-base/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-success-base/30 to-info-base/40" />

            <div className=" bg-neutro-shadow z-10 p-4 w-150 flex rounded-lg gap-2  shadow-xl">
                <div className="flex-1">
                    <LoginForm />
                </div>

                <div className="flex-1">
                    <LoginInformation />
                </div>
            </div>
        </div>
    );
}
