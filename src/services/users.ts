import User from '../models/user';

export const getUsersWithGuardianRole = (): User[] => [
    { id: '1', name: 'Snow Services' },
    { id: '2', name: 'Lannister Services' },
    { id: '3', name: 'Magic Services' },
    { id: '4', name: 'Stark Services' },
    { id: '5', name: 'Targaryen Services' },
    { id: '6', name: 'Melisandre Services' },
    { id: '7', name: 'Clifford Services' },
    { id: '8', name: 'Frances Services' },
    { id: '9', name: 'Roxie Services' },
];

export default getUsersWithGuardianRole;
