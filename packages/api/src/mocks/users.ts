import User from '../models/user';

export const getUsersWithGuardianRole = async (): Promise<User[]> => [
    { id: '1', name: 'Snow api mock' },
    { id: '2', name: 'Lannister api mock' },
    { id: '3', name: 'Magic api mock' },
    { id: '4', name: 'Stark api mock' },
    { id: '5', name: 'Targaryen api mock' },
    { id: '6', name: 'Melisandre api mock' },
    { id: '7', name: 'Clifford api mock' },
    { id: '8', name: 'Frances api mock' },
    { id: '9', name: 'Roxie api mock' },
];

export default getUsersWithGuardianRole;
