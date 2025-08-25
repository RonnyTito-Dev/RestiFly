// 📂 src\server.ts

import { Application, Router } from 'express';
import express from 'express';
import path from 'path';
import env from '@/config/env/index';

import errorHandler from '@/middlewares/errorHandler';
import userRoutes from '@/features/user/userRoutes';
import authRoutes from '@/features/auth/authRoutes';

class Server {
    app: Application;

    constructor() {
        this.app = express();
        this.inputMiddlewares();
        this.createdRoutes();
        this.serveFiles();
        this.outputMiddlewares();
    }

    private inputMiddlewares() {
        this.app.use(express.json());
    }

    // Metodo para rutas
    private createdRoutes() {
        const apiRouter: Router = Router();
        apiRouter.use('/users', userRoutes);
        apiRouter.use('/auth', authRoutes);

        this.app.use('/api', apiRouter);
    }

    // Metodo para servir archivos
    private serveFiles() {
        const publicPath = path.join(process.cwd(), 'public');
        this.app.use(express.static(publicPath));
    }

    private outputMiddlewares() {
        this.app.use(errorHandler);
    }

    // Metodo para arrancar
    public start() {
        this.app.listen(env?.PORT, () => {
            console.log(`🟢 Servidor corriendo en el Puerto ${env?.PORT}`);
        });
    }
}

// Instanciar el server
const server = new Server();
server.start();
