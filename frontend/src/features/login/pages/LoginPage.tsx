// 📂 src\features\login\pages\LoginPage.tsx

import LoginForm from '../components/LoginForm';
import LoginInformation from '../components/LoginInformation';

export default function LoginPage() {
    return (
        <div className="w-full h-[100vh] bg-[url('/images/background.jpg')] bg-cover bg-center flex justify-center items-center ">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-base/30 to-secondary-base/50"></div>

            <div className="z-10 flex justify-center items-center gap-5 bg-neutro-shadow w-3xl rounded-xl p-10">
                <LoginForm className="flex-1" />
                <LoginInformation className="flex-1" />
            </div>
        </div>
    );
}
