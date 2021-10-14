import { BaseQueryRequest } from '../models/base';
import { ElectionManifest } from '../models/election';
import { ElementModQ } from '../models/keyCeremony';
import {
    Manifest,
    ManifestQueryResponse,
    ManifestSubmitResponse,
    ValidateManifestRequest,
    ValidateManifestResponse,
} from '../models/manifestPreview';
import { get, post, put } from '../utils/http';

export const getManifest = async (manifest_hash: string): Promise<Manifest[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}manifest?manifest_hash=${manifest_hash}`;
    const response = await get<{ resp: ManifestQueryResponse }>(path);
    return response.parsedBody?.resp.manifests;
};

export const putManifest = async (manifest: ElectionManifest): Promise<ElementModQ | undefined> => {
    const data: ValidateManifestRequest = {
        manifest,
        schema_override: undefined,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}manifest`;
    const response = await put<{ resp: ManifestSubmitResponse }>(path, data);
    return response.parsedBody?.resp.manifest_hash;
};

export const findManifest = async (
    skip: number,
    limit: number,
    manifest_id: string
): Promise<Manifest[] | undefined> => {
    const data: BaseQueryRequest = {
        filter: { manifest_id },
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}manifest/find?skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: ManifestQueryResponse }>(path, data);
    return response.parsedBody?.resp.manifests;
};

export const validateManifest = async (manifest: ElectionManifest): Promise<string | undefined> => {
    const data: ValidateManifestRequest = {
        manifest,
        schema_override: undefined,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}manifest/validate`;
    const response = await post<{ resp: ValidateManifestResponse }>(path, data);
    return response.parsedBody?.resp.manifest_hash;
};

export default getManifest;
