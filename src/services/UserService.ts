import Prisma from '@/services/Prisma';
import { User } from '@prisma/client';


class UserService {
    async createUser (email: string) {
        return Prisma.user.create({ data: { email } });
    }

    async getUsers (): Promise<User[]> {
        return Prisma.user.findMany();
    }
}

export default new UserService();