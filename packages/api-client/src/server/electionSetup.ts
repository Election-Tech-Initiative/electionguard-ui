import { JointKey } from '../models/jointKey';
import { getAssignedGuardians } from './guardians';
import { post } from '../utils/http';

export { getManifestPreview } from '../mocks/electionSetup';

export const getJointKeys = async (): Promise<JointKey[]> => {
    const keys: JointKey[] = [];
    const data = { filter: { state: 'CREATED' } };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/find?skip=0&limit=100`;

    const response = await post<{
        status: string;
        message: string;
        key_ceremonies: { key_name: string; number_of_guardians: number; quorum: number }[];
    }>(path, data);
    if (typeof response.parsedBody !== 'undefined') {
        response.parsedBody.key_ceremonies.forEach((item) => {
            keys.push({
                id: item.key_name,
                name: item.key_name,
                numberOfGuardians: item.number_of_guardians,
                quorum: item.quorum,
                dateCreated: new Date(),
                guardians: getAssignedGuardians(),
            });
        });
    }
    return keys;
};
