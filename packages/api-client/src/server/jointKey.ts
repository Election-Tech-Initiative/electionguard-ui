import { BaseJointKey } from '../models/jointKey';
import { put } from '../utils/http';

export const createJointKey = async (data: BaseJointKey): Promise<boolean> => {
    const submitData = {
        key_name: data.name,
        number_of_guardians: data.numberOfGuardians,
        quorum: data.quorum,
        guardian_ids: data.guardians.map((g) => g.id),
    };

    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony`;
    const response = await put<string>(path, submitData);

    return response.ok;
};

export default createJointKey;
