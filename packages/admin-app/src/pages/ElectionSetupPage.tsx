import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useGetJointKeys } from '@electionguard/api-client';
// import { useNavigate } from 'react-router-dom';
import ElectionSetupWizard from '../components/ElectionSetupWizard';
// import InternationalText from '../components/InternationalText';
// import { loremIpsum, MessageId } from '../lang';

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
    //    const navigate = useNavigate();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <ElectionSetupWizard getKeys={useGetJointKeys} />
            </Container>
        </Grid>
    );
};

export default ElectionSetupPage;
