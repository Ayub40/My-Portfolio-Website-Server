import bcrypt from "bcryptjs";
import { prisma } from "../../config/db";

const loginWithEmailAndPassword = async ({ email, password }: { email: string, password: string }) => {
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error("User not found!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Password is incorrect!");
    }

    // Password do not show
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;

    // return user
};

export const AuthService = {
    loginWithEmailAndPassword,
};
