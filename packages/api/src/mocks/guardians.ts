import AssignedGuardian from '../models/assignedGuardian';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow assigned mock api' },
    { sequenceOrder: 2, id: '2', name: 'Lannister assigned mock api' },
    { sequenceOrder: 3, id: '3', name: 'Magic assigned mock api' },
    { sequenceOrder: 4, id: '4', name: 'Stark assigned mock api' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen assigned mock api' },
];

export const createGuardian = (id: string, name: string, sequenceOrder:  number): void => {
}

export default getAssignedGuardians;
