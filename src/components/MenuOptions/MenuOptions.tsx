import { Box, Container, Grid, Typography, lighten, makeStyles } from '@material-ui/core';
import React from 'react';

import Permission from '../../models/permission';
import MenuOption from '../MenuOption';
import getMenuOptions from './getMenuOptions';

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
    prompt: string;
    permissions: Permission[];
}

/**
 * A set of menu options with a prompt
 * TODO Deteremine options based on permissions
 */
const MenuOptions: React.FC<MenuOptionsProps> = ({ prompt, permissions }) => {
    const classes = useStyles();
    const options = getMenuOptions(permissions);
    return (
        <Box className={classes.root}>
            <Typography variant="h5" component="p" className={classes.prompt}>
                {prompt}
            </Typography>
            <Container maxWidth="xs">
                <Grid container className={classes.options}>
                    {options.map((option) => (
                        <MenuOption
                            key={`menu-option-${option.title}`}
                            title={option.title}
                            Icon={option.Icon}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MenuOptions;
