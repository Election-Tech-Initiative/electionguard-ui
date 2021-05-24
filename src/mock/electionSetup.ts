import JointKey from '../models/jointKey';
import ManifestPreview from '../models/manifestPreview';

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

export const getJointKeys = (): JointKey[] => [
    {
        id: 'joint-key-1',
        name: 'Joint Key 1',
    },
    {
        id: 'joint-key-2',
        name: 'Joint Key 2',
    },
];
