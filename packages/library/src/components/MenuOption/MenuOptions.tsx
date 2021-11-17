import { Box, Container, Grid, lighten, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message } from '../../lang';
import InternationalText from '../InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: lighten(theme.palette.primary.main, 0.9),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    prompt: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
    },
    options: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

export interface MenuOptionsProps {
    prompt: Message;
}

/**
 * A set of menu options with a prompt
 * TODO Deteremine options based on permissions
 */
export const MenuOptions: React.FC<MenuOptionsProps> = ({ prompt, children }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <InternationalText
                variant="h5"
                component="p"
                className={classes.prompt}
                id={prompt.id}
                description="Prompt for a user on menu"
                defaultMessage={prompt.defaultMessage}
            />
            <Container maxWidth="xs">
                <Grid container className={classes.options}>
                    {children}
                </Grid>
            </Container>
        </Box>
    );
};

export default MenuOptions;
