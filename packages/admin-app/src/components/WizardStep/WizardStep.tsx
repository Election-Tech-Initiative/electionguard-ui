import { Box, Slide } from '@mui/material';
import React from 'react';

export interface WizardStepProps {
    active: boolean;
}

/**
 * A generic wizard step wrapper for transitions
 */
export const WizardStep: React.FC<WizardStepProps> = ({ active, children }) => (
    <Slide direction="right" in={active} mountOnEnter unmountOnExit>
        <Box height="100%">{children}</Box>
    </Slide>
);

export default WizardStep;
