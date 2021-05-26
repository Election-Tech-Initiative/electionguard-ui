import { GridFilterToolbarButton, GridToolbarContainer } from '@material-ui/data-grid';
import * as React from 'react';

const FilterToolbar: React.FC = () => (
    <GridToolbarContainer>
        <GridFilterToolbarButton />
    </GridToolbarContainer>
);

export default FilterToolbar;
