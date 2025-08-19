// 📂 src\features\not-found\pages\NotFoundPage.tsx

import { Input, Button } from '@heroui/react';

export default function NotFoundPage() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-6">
            <h1 className="bg-accent-base text-2xl font-black"> hola </h1>
            <Input label="Email" type="email" size="sm" className="bg-neutro-deep text-red-400" />
            <Input label="Email" placeholder="Enter your email" type="email" size="sm" />
            <Button
                type="submit"
                radius="sm"
                className="text-info bg-info-base text-neutro-shadow font-secondary text-3xl"
            >
                Full
            </Button>
        </div>
    );
}
