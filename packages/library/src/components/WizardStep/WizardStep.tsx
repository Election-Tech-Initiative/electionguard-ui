import { Box, Slide } from '@material-ui/core';
import React from 'react';

export interface WizardStepProps {
    active: boolean;
}

/**
 * A generic wizard step wrapper for transitions
 */
const WizardStep: React.FC<WizardStepProps> = ({ active, children }) => (
    <Slide direction="right" in={active} mountOnEnter unmountOnExit>
        <Box height="100%">{children}</Box>
    </Slide>
);

export default WizardStep;
