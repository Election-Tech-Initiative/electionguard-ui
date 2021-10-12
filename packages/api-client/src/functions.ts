import ElectionGuardApiClient from './Api';
import MockApi from './MockApi';
import ServiceApi from './ServiceApi';

export interface UrlHolder {
    url: string;
}

export const filterByTerm = (inputArr: UrlHolder[], searchTerm: string): UrlHolder[] =>
    inputArr.filter((arrayElement) => arrayElement.url.match(searchTerm));

let data: ElectionGuardApiClient;

export const getApiClient = (): ElectionGuardApiClient => {
    if (!data) {
        if (process.env.REACT_APP_MOCK_ENABLED === 'true') {
            data = new MockApi();
        }

        data = new ServiceApi();
    }
    return data;
};
