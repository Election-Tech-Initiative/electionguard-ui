export class UrlGetter {
    static GetUrl(): string {
        return process.env.REACT_APP_MEDIATOR_SERVICE || '';
    }
}
