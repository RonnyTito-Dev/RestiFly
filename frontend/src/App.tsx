// 📂 src\App.tsx

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/login/pages/LoginPage';
import NotFoundPage from './features/not-found/pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
