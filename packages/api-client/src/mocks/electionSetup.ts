import { JointKey } from '../models/jointKey';
import { ManifestPreview } from '../models/manifestPreview';
import { SubmitElectionRequest, ValidateManifestRequest } from '../nswag/clients';
import { getAssignedGuardians } from './guardians';

export const getManifestPreview = (
    _manifest: ValidateManifestRequest,
    _request: SubmitElectionRequest
): ManifestPreview => {
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

export const getJointKeys = async (): Promise<JointKey[]> => [
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
