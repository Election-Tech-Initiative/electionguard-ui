import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ElectionSetupWizard from '../components/ElectionSetupWizard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const ElectionSetupPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <ElectionSetupWizard />
            </Container>
        </Grid>
    );
};

export default ElectionSetupPage;
