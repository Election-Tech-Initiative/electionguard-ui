import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const MenuPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            Menu
        </Grid>
    );
};

export default MenuPage;
