/* tslint:disable */
/* eslint-disable */
import { JointKey } from '../models/jointKey';
import { getAssignedGuardians } from './guardians';
import { post } from '../utils/http';
import { ManifestPreview } from '../models';
import { SubmitElectionRequest, ValidateManifestRequest } from '../nswag/clients';

// todo: figure out how to retrieve the current language
const getLanguage = (): string => 'en';

const getElectionName = (manifest: any): string => {
    const language = getLanguage();
    const textList: Array<any> = manifest.name?.text;
    if (textList) {
        const languageText = textList.find((i: any) => i.language === language);
        return languageText.value;
    }
    return '';
};

export const getManifestPreview = (
    manifest: ValidateManifestRequest,
    request: SubmitElectionRequest
): ManifestPreview => {
    const manifestData = manifest.manifest?.manifest;
    if (!manifestData) return {} as ManifestPreview;
    const endDate = new Date(manifestData.end_date);
    const electionName = getElectionName(manifestData);
    return {
        id: request.key_name,
        name: electionName,
        numberOfContests: 5,
        numberOfStyles: 3,
        startDate: new Date(),
        endDate,
    };
};

export const getJointKeys = async (): Promise<JointKey[]> => {
    const keys: JointKey[] = [];
    const data = { filter: { state: 'CREATED' } };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}/api/v1/key/ceremony/find?skip=0&limit=100`;

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
