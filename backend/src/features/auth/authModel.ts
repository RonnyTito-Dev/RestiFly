// 📂 src\features\auth\authModel.ts

import db from '@/lib/db';

export async function findUserByEmail(email: string) {
    const user = await db.query(
        'SELECT * FROM users_user WHERE user_email = ? AND accs_code = ? AND user_deleted_at IS NULL LIMIT 1',
        [email, 'ACTIVE']
    );

    return user ?? null;
}
