import { BaseResponse } from '../models/base';
import { BaseJointKey } from '../models/jointKey';
import { put } from '../utils/http';

export const postJointKey = async (data: BaseJointKey): Promise<boolean | undefined> => {
    const submitData = {
        key_name: data.name,
        number_of_guardians: data.numberOfGuardians,
        quorum: data.quorum,
        guardian_ids: data.guardians.map((g) => g.id),
    };

    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}/api/v1/key/ceremony`;
    const response = await put<{ resp: BaseResponse }>(path, submitData);
    return response.parsedBody?.resp.is_success();
};

export default postJointKey;
