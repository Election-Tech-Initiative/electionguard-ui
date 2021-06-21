import AssignedGuardian from '../models/assignedGuardian';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow Services' },
    { sequenceOrder: 2, id: '2', name: 'Lannister Services' },
    { sequenceOrder: 3, id: '3', name: 'Magic Services' },
];

export default getAssignedGuardians;
