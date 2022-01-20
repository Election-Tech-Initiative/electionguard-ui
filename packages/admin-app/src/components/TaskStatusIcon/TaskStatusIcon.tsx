import { TaskStatus } from '@electionguard/api-client';
import makeStyles from '@mui/styles/makeStyles';
import {
    CheckCircleOutlined as CompleteIcon,
    CancelOutlined as ErrorIcon,
} from '@mui/icons-material';
import React from 'react';

import { Message, MessageId } from '../../lang';
import FormattedButton from '../FormattedButton';
import InternationalText from '../InternationalText';

const iconSize = 36;

const useStyles = makeStyles(() => ({
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: iconSize,
    },
}));

export interface TaskStatusIconProps {
    status: TaskStatus;
    buttonText?: Message;
    onClick?: () => void;
}

/**
 * A menu option card for the menu screens
 */
export const TaskStatusIcon: React.FC<TaskStatusIconProps> = ({ status, buttonText, onClick }) => {
    const classes = useStyles();
    switch (status) {
        case TaskStatus.Complete:
            return (
                <InternationalText
                    className={classes.icon}
                    id={MessageId.TaskStatus_Error}
                    screenReaderOnly
                >
                    <CompleteIcon fontSize="inherit" color="primary" />
                </InternationalText>
            );
        case TaskStatus.Error:
            return (
                <InternationalText
                    className={classes.icon}
                    id={MessageId.TaskStatus_Error}
                    screenReaderOnly
                >
                    <ErrorIcon fontSize="inherit" color="error" />
                </InternationalText>
            );
        case TaskStatus.Incomplete:
            if (buttonText && onClick) {
                return <FormattedButton text={buttonText} onClick={onClick} />;
            }
            return (
                <InternationalText
                    className={classes.icon}
                    id={MessageId.TaskStatus_Incomplete}
                    screenReaderOnly
                />
            );
        default:
            return (
                <InternationalText
                    className={classes.icon}
                    id={MessageId.TaskStatus_Incomplete}
                    screenReaderOnly
                />
            );
    }
};

export default TaskStatusIcon;
