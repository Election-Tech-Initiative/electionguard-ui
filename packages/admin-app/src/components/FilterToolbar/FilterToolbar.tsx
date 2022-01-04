import { GridToolbarContainer, GridToolbarFilterButton } from '@material-ui/data-grid';
import * as React from 'react';

export const FilterToolbar: React.FC = () => (
    <GridToolbarContainer>
        <GridToolbarFilterButton />
    </GridToolbarContainer>
);

export default FilterToolbar;
