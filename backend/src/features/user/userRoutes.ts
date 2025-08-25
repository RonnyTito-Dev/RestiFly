// 📂 backend\src\features\user\userRoutes.ts

import { Router } from 'express';
import * as userController from './userController';

// Inicializamos router
const router = Router();

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++ METODOS GET +++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// ====================== Obtner todos los usuarios ======================
router.get('/', userController.getAllUser);

// Exportar el router
export default router;
