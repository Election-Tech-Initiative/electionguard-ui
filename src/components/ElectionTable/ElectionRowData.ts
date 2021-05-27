import { GridRowData } from '@material-ui/data-grid';

export interface ElectionRowData extends GridRowData {
    id: string;
    isNew: boolean;
    name: string;
    state: string;
    jurisdiction: string;
    dateCreated: Date;
}
