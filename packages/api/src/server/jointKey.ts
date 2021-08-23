import { BaseJointKey } from '../models/jointKey';

export const createJointKey = (data: BaseJointKey): boolean => {
    console.log('creating the joint key server');
    console.dir(data);
    return true;
};

export default createJointKey;
