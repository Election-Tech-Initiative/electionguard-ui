import AssignedGuardian from '../models/assignedGuardian';
import { getColor } from '../theme';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { color: getColor(1), sequenceOrder: 1, id: '1', name: 'Snow Services' },
    { color: getColor(2), sequenceOrder: 2, id: '2', name: 'Lannister Services' },
    { color: getColor(3), sequenceOrder: 3, id: '3', name: 'Magic Services' },
];

export default getAssignedGuardians;
