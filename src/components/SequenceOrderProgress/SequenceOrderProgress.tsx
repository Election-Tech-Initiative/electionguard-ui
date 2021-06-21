import { Box, CircularProgress, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';

import { getColor } from '../../theme';
import { SequenceOrderStep } from './SequenceOrderStep';

const useStyles = makeStyles((theme) => ({
    inactive: {
        zIndex: 1,
        gridArea: 'area-1',
        color: theme.palette.grey[400],
    },
    background: {
        zIndex: 2,
        gridArea: 'area-1',
        color: theme.palette.grey[300],
    },
    progress: {
        zIndex: 3,
        gridArea: 'area-1',
    },
}));

export interface SequenceOrderProgressProps {
    steps: SequenceOrderStep[];
    active?: boolean;
    size?: number;
    thickness?: number;
    completeColor?: string;
}

const SequenceOrderProgress: React.FC<SequenceOrderProgressProps> = ({
    steps,
    active,
    completeColor,
    size = 150,
    thickness = 7,
}) => {
    const theme = useTheme();
    const color = completeColor || theme.palette.primary.main;
    const allComplete = steps.findIndex((step) => !step.complete) === -1;
    const rotation = 360 / steps.length;
    const progress = 100 / steps.length;
    const classes = useStyles();
    return (
        <Box display="grid" alignItems="center" justifyItems="center" min-height="auto">
            <CircularProgress
                className={classes.inactive}
                color="inherit"
                size={size}
                variant="static"
                thickness={thickness}
                value={100}
            />
            {active &&
                (allComplete ? (
                    <CircularProgress
                        className={classes.progress}
                        style={{ color }}
                        color="inherit"
                        size={150}
                        variant="static"
                        thickness={thickness}
                        value={100}
                    />
                ) : (
                    <>
                        <CircularProgress
                            className={classes.background}
                            color="inherit"
                            size={size}
                            variant="static"
                            thickness={thickness}
                            value={100}
                        />
                        {steps.map((step) => (
                            <CircularProgress
                                className={classes.progress}
                                key={`sequence-order-${step.sequenceOrder}`}
                                style={{
                                    color: getColor(step.sequenceOrder),
                                    transform: `rotate(${rotation * step.sequenceOrder}deg)`,
                                }}
                                color="inherit"
                                size={150}
                                variant="static"
                                thickness={step.complete ? thickness : 2}
                                value={progress}
                            />
                        ))}
                    </>
                ))}
        </Box>
    );
};

export default SequenceOrderProgress;
