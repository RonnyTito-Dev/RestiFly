// 📂 src\features\not-found\pages\NotFoundPage.tsx

import api from '@/lib/api';

async function onConsult() {
    const hla = await api.get('/users');
    console.log(hla);
}

export default function NotFoundPage() {
    return <button onClick={() => onConsult()}> hacer consulta </button>;
}
