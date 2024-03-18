import UserService from '@/services/UserService';


export async function POST (request: Request) {
    const { email } = await request.json();
    const user = await UserService.createUser(email);
    return Response.json({ user });
}