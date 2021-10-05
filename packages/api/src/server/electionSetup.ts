import { JointKey } from '../models/jointKey';
import ManifestPreview from '../models/manifestPreview';
import { getAssignedGuardians } from './guardians';
import { post } from '../utils/http';

export const getManifestPreview = (): ManifestPreview => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    return {
        name: 'Montgomery County Election',
        numberOfContests: 5,
        numberOfStyles: 3,
        startDate: new Date(),
        endDate,
        fileHash: '1234lasdf98j3124klajksdflajsdfio',
        fileName: 'manifest.json',
    };
};

export const getJointKeysold = (): JointKey[] => [
    {
        id: 'joint-key-1',
        name: 'Joint Key 1',
        numberOfGuardians: 3,
        quorum: 2,
        guardians: getAssignedGuardians(),
        dateCreated: new Date(),
    },
    {
        id: 'joint-key-2',
        name: 'Joint Key 2',
        numberOfGuardians: 3,
        quorum: 2,
        guardians: getAssignedGuardians(),
        dateCreated: new Date(),
    },
];

export const getJointKeys = async (): Promise<JointKey[]> => {
    const keys: JointKey[] = [];
    const data = { filter: { state: "CREATED"}};
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/find?skip=0&limit=100`;

    const response = await post<{status:string, message:string, key_ceremonies:{key_name:string, number_of_guardians: number, quorum: number}[]}>(path, data);
    if(typeof response.parsedBody !== "undefined") {
        response.parsedBody.key_ceremonies.forEach((item) => {
            keys.push({id: item.key_name, name: item.key_name, numberOfGuardians: item.number_of_guardians, quorum: item.quorum, dateCreated: new Date(), guardians: getAssignedGuardians()});
        });
    }
    return keys;
};
