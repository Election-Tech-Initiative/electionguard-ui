import AssignedGuardian from '../models/assignedGuardian';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow mock' },
    { sequenceOrder: 2, id: '2', name: 'Lannister mock' },
    { sequenceOrder: 3, id: '3', name: 'Magic mock' },
    { sequenceOrder: 4, id: '4', name: 'Stark mock' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen mock' },
];

export const createGuardian = (id: string, name: string, sequenceOrder:  number): void => {
}

export default getAssignedGuardians;
