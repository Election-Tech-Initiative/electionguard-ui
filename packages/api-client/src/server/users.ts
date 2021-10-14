import User from '../models/user';
import { post } from '../utils/http';

export const getUsersWithGuardianRole = async (): Promise<User[]> => {
    const users: User[] = [];
    const data = {};
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/find?skip=0&limit=100`;

    const response = await post<{
        status: string;
        message: string;
        guardians: { guardian_id: string; name: string }[];
    }>(path, data);
    if (typeof response.parsedBody !== 'undefined') {
        response.parsedBody.guardians.forEach((item) => {
            users.push({ id: item.guardian_id, name: item.name });
        });
    }

    return users;
};

export default getUsersWithGuardianRole;
