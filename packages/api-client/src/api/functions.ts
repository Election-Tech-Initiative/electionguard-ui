export interface UrlHolder {
    url: string;
}

export const filterByTerm = (inputArr: UrlHolder[], searchTerm: string): UrlHolder[] =>
    inputArr.filter((arrayElement) => arrayElement.url.match(searchTerm));
