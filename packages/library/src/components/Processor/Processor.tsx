import { TaskStatus } from '@electionguard-ui/api-client';
import { Box, CircularProgress, Container, SvgIconProps, makeStyles } from '@material-ui/core';
import {
    CheckCircle as DefaultCompleteIcon,
    Error as DefaultErrorIcon,
    Schedule as DefaultProcessingIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import React, { useState } from 'react';

import { Message, MessageId } from '../../lang';
import FormattedButton from '../FormattedButton';
import InternationalText from '../InternationalText';
import StepHeader from '../StepHeader';

const iconSize = 64;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    progressContainer: {
        paddingTop: theme.spacing(3),
    },
    processing: {
        color: theme.palette.secondary.main,
    },
    error: {
        color: theme.palette.error.main,
    },
    success: {
        color: theme.palette.primary.main,
    },
    icon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        fontSize: iconSize,
        marginTop: -iconSize / 2,
        marginLeft: -iconSize / 2,
    },
}));

export interface ProcessorProps {
    startingStatus?: TaskStatus;
    Icon?: React.ComponentType<SvgIconProps>;
    title: Message;
    description: Message;
    disabledButtonText?: Message;
    disabled?: boolean;

    ProcessingIcon?: React.ComponentType<SvgIconProps>;
    processingText?: Message;
    processingButtonText: Message;
    onProcess?: () => void;

    CompleteIcon?: React.ComponentType<SvgIconProps>;
    completedText?: Message;
    completedButtonText?: Message;
    onComplete?: () => void;

    ErrorIcon?: React.ComponentType<SvgIconProps>;
    errorText?: Message;
    errorButtonText?: Message;
}

const handleStatus = <T extends unknown>(
    status: TaskStatus,
    success: T,
    error: T,
    processing: T
): T => {
    switch (status) {
        case TaskStatus.Complete:
            return success;
        case TaskStatus.Error:
            return error;
        case TaskStatus.Processing:
            return processing;
        default:
            return processing;
    }
};

/**
 * Processor for awaiting tasks
 */
const Processor: React.FC<ProcessorProps> = ({
    startingStatus,
    Icon,
    title,
    description,
    processingButtonText,
    onProcess,
    disabledButtonText,
    disabled,
    ProcessingIcon = DefaultProcessingIcon,
    processingText = new Message(MessageId.Placeholder_Processing),
    CompleteIcon = DefaultCompleteIcon,
    completedText = new Message(MessageId.Placeholder_Complete),
    completedButtonText = new Message(MessageId.Actions_Continue),
    onComplete,
    ErrorIcon = DefaultErrorIcon,
    errorText = new Message(MessageId.Placeholder_Error),
    errorButtonText = new Message(MessageId.Actions_Back),
}) => {
    const classes = useStyles();
    const [status, setStatus] = useState(startingStatus || TaskStatus.Incomplete);
    const reset = () => setStatus(TaskStatus.Incomplete);
    const color = handleStatus(status, classes.success, classes.error, classes.processing);
    const progressText = handleStatus(status, completedText, errorText, processingText);
    const ProgressIcon = handleStatus(status, CompleteIcon, ErrorIcon, ProcessingIcon);
    const progressOnClick = handleStatus(status, onComplete, reset, reset);
    const progressButtonText = handleStatus(
        status,
        completedButtonText,
        errorButtonText,
        processingButtonText
    );
    const displayButton = status === TaskStatus.Error || status === TaskStatus.Complete;

    return (
        <Container className={classes.root}>
            {status === TaskStatus.Incomplete && (
                <StepHeader
                    Icon={Icon}
                    title={title}
                    description={description}
                    disabled={disabled}
                    onClick={async () => {
                        try {
                            setStatus(TaskStatus.Processing);
                            if (onProcess) await onProcess();
                            setStatus(TaskStatus.Complete);
                        } catch {
                            setStatus(TaskStatus.Error);
                        }
                    }}
                    buttonText={processingButtonText}
                    disabledButtonText={disabledButtonText}
                />
            )}
            {status !== TaskStatus.Incomplete && (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box position="relative" className={classes.progressContainer}>
                        <CircularProgress
                            className={color}
                            size={240}
                            thickness={4}
                            color="inherit"
                            variant={
                                status === TaskStatus.Processing ? 'indeterminate' : 'determinate'
                            }
                            value={100}
                        />
                        <ProgressIcon className={clsx(classes.icon, color)} />
                    </Box>
                    <InternationalText
                        className={classes.spaced}
                        variant="h4"
                        id={progressText?.id}
                        defaultMessage={progressText?.defaultMessage}
                        description={progressText?.description}
                    />
                    {displayButton && (
                        <FormattedButton
                            color="secondary"
                            variant="contained"
                            text={progressButtonText}
                            onClick={progressOnClick}
                        />
                    )}
                </Box>
            )}
        </Container>
    );
};

export default Processor;
