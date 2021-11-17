import { TaskStatus } from '@electionguard-ui/api';
import { Button, Chip } from '@material-ui/core';
import { GridCellParams } from '@material-ui/data-grid';
import React, { ReactElement } from 'react';
import { IntlShape } from 'react-intl';

import { Message } from '../../lang';
import { getColor } from '../../theme';
import FormattedButton from '../FormattedButton';
import GuardianIcon from '../GuardianIcon';
import TaskStatusIcon from '../TaskStatusIcon';

export const EmptyCell = (): ReactElement => <></>;

export const NewCell = (params: GridCellParams): ReactElement => {
    const { value } = params;
    return value ? <Chip color="secondary" label="*New" /> : <></>;
};

export const FormattedDateCell = (params: GridCellParams, intl: IntlShape): ReactElement => {
    const { value } = params;
    const { formatDate } = intl;
    return <>{formatDate(value?.toString())}</>;
};

export const GuardianIconCell = (params: GridCellParams): ReactElement => {
    const { value } = params;
    const sequenceOrder = Number(value);
    return <GuardianIcon sequenceOrder={sequenceOrder} color={getColor(sequenceOrder)} />;
};

export const TaskStatusCell = (
    params: GridCellParams,
    buttonText?: Message,
    onClick?: () => void
): ReactElement => {
    const { value } = params;
    const status = value as TaskStatus;
    return <TaskStatusIcon status={status} buttonText={buttonText} onClick={onClick} />;
};

export const IdButtonCell = (
    params: GridCellParams,
    text: Message,
    onClick: (id: string) => void
): ReactElement => {
    const { value } = params;
    const id = value as string;
    return <FormattedButton text={text} onClick={() => onClick(id)} />;
};

export const LinkCell = (): React.ReactElement => <Button color="primary">Open</Button>;
