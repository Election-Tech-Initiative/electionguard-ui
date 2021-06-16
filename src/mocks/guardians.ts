import AssignedGuardian from '../models/assignedGuardian';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow' },
    { sequenceOrder: 2, id: '2', name: 'Lannister' },
    { sequenceOrder: 3, id: '3', name: 'Magic' },
    { sequenceOrder: 4, id: '4', name: 'Stark' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen' },
];

export default getAssignedGuardians;
