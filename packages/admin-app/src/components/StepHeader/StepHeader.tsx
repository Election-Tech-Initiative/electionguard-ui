import { Box, Container, SvgIconProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import { Message } from '../../lang';
import FormattedButton from '../FormattedButton';
import IconHeader from '../IconHeader';
import InternationalText from '../InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
}));

export interface StepHeaderProps {
    title: Message;
    description: Message;
    buttonText: Message;
    disabledButtonText?: Message;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    Icon?: React.ComponentType<SvgIconProps>;
}

/**
 * Common Header for Steps
 */
export const StepHeader: React.FC<StepHeaderProps> = ({
    title,
    description,
    buttonText,
    onClick,
    loading,
    disabled,
    Icon,
}) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <IconHeader Icon={Icon} title={title} />
            <InternationalText className={classes.spaced} component="p" id={description.id} />
            <Box width="100%" display="flex" justifyContent="center">
                <FormattedButton
                    className={classes.spaced}
                    variant="contained"
                    color="secondary"
                    onClick={onClick}
                    disabled={disabled}
                    loading={loading}
                    text={buttonText}
                />
            </Box>
        </Container>
    );
};

export default StepHeader;
