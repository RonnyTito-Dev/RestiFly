// 📂 src\app.ts

import express from 'express';
import type { Application, Request, Response } from 'express';
import logger from './utils/logger';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(logger);

//

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor con express funcionando 🚀');
});

export default app;
