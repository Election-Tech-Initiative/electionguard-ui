import User from '../models/user';

export const getUsersWithGuardianRole = async (): Promise<User[]> => [
    { id: '1', name: 'Snow mock' },
    { id: '2', name: 'Lannister mock' },
    { id: '3', name: 'Magic mock' },
    { id: '4', name: 'Stark mock' },
    { id: '5', name: 'Targaryen mock' },
    { id: '6', name: 'Melisandre mock' },
    { id: '7', name: 'Clifford mock' },
    { id: '8', name: 'Frances mock' },
    { id: '9', name: 'Roxie mock' },
];

export default getUsersWithGuardianRole;
