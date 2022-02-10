import { Container, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import JointKeyWizard from '../components/JointKeyWizard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const KeySetupPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <JointKeyWizard />
            </Container>
        </Grid>
    );
};

export default KeySetupPage;
