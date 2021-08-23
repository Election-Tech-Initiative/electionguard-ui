import AssignedGuardian from '../models/assignedGuardian';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow assigned server api' },
    { sequenceOrder: 2, id: '2', name: 'Lannister assigned server api' },
    { sequenceOrder: 3, id: '3', name: 'Magic assigned server api' },
    { sequenceOrder: 4, id: '4', name: 'Stark assigned server api' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen assigned server api' },
];

export default getAssignedGuardians;
