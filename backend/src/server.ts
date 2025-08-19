// 📂 src\server.ts

import app from './app';
import env from './config/env/index';

app.listen(env?.PORT, () => {
    console.log(`🟢 Servidor corriendo en el Puerto ${env?.PORT}`);
});
