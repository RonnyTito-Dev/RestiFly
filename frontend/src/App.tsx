// 📂 src\App.tsx

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ToastContainer from './components/ui/ToastContainer';
// import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/login/pages/LoginPage';
import NotFoundPage from './features/not-found/pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/test" element={<NotFoundPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
