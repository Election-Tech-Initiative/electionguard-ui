import User from '../models/user';

export const getUsersWithGuardianRole = (): User[] => [
    { id: '1', name: 'Snow' },
    { id: '2', name: 'Lannister' },
    { id: '3', name: 'Magic' },
    { id: '4', name: 'Stark' },
    { id: '5', name: 'Targaryen' },
    { id: '6', name: 'Melisandre' },
    { id: '7', name: 'Clifford' },
    { id: '8', name: 'Frances' },
    { id: '9', name: 'Roxie' },
];

export default getUsersWithGuardianRole;
