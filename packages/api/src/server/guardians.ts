import AssignedGuardian from '../models/assignedGuardian';
import { post } from '../utils/http';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow server' },
    { sequenceOrder: 2, id: '2', name: 'Lannister server' },
    { sequenceOrder: 3, id: '3', name: 'Magic server' },
    { sequenceOrder: 4, id: '4', name: 'Stark server' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen server' },
];

export const createGuardian = async (id: string, username: string, sequenceOrder:  number): Promise<string> => {
    const data = {
        guardian_id: id,
        sequence_order: sequenceOrder,
        number_of_guardians: 3,
        quorum: 2,
        name: username,
        key_name: ""
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian`;
    const response = await post<string>(path, data);

    return response.arrayBuffer.toString();
}

export default getAssignedGuardians;
