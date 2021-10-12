import { ElectionRowData } from './ElectionRowData';

class ElectionRow implements ElectionRowData {
    /**
     * Row of Election Data
     */
    constructor(
        id: string,
        name: string,
        state: string,
        jurisdiction: string,
        dateCreated: Date,
        isNew = false
    ) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.jurisdiction = jurisdiction;
        this.dateCreated = dateCreated;
        this.isNew = isNew;
    }

    id: string;

    isNew: boolean;

    name: string;

    state: string;

    jurisdiction: string;

    dateCreated: Date;
}

export default ElectionRow;
