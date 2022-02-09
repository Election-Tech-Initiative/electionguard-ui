export class ClientBase {
    /**
     * authorization token value
     */
    public token: string | null;

    constructor() {
        this.token = null;
    }

    protected transformOptions(options: RequestInit): Promise<RequestInit> {
        if (!this.token || !options?.headers) return Promise.resolve(options);
        const authOptions = {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `bearer ${this.token}`,
            },
        };
        return Promise.resolve(authOptions);
    }
}
