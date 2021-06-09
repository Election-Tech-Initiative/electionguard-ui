import { Chip } from '@material-ui/core';
import { GridCellParams } from '@material-ui/data-grid';
import React, { ReactElement } from 'react';
import { IntlShape } from 'react-intl';

export const EmptyCell = (): ReactElement => <></>;

export const NewCell = (params: GridCellParams): ReactElement => {
    const { value } = params;
    return value ? <Chip color="secondary" label="*New" /> : <></>;
};

export const FormattedDateCell = (params: GridCellParams, intl: IntlShape): ReactElement => {
    const { value } = params;
    return <>{intl.formatDate(value?.toString())}</>;
};
