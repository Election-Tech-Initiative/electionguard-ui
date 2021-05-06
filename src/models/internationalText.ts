export interface IntlText {
    id: string;
    defaultText: string;
}

export class InternationalText implements IntlText {
    id: string;

    defaultText: string;

    constructor(id = 'app.placeholder', defaultText = 'placeholder') {
        this.id = id;
        this.defaultText = defaultText;
    }
}

export default InternationalText;
