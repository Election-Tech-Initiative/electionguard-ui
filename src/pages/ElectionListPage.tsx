import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import ElectionTable from '../components/ElectionTable';
import InternationalText from '../components/InternationalText';
import { MessageId, loremIpsum } from '../lang';
import getElections from '../mocks/elections';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
}));

const ElectionListPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="lg" className={classes.content}>
                <InternationalText
                    className={classes.spaced}
                    variant="h3"
                    component="h1"
                    id={MessageId.ElectionListTitle}
                    defaultMessage="Election List"
                />
                <InternationalText
                    className={classes.spaced}
                    id={MessageId.ElectionListDescription}
                    defaultMessage={loremIpsum}
                />
                <Button className={classes.spaced} variant="contained" color="secondary">
                    <Home className={classes.buttonIcon} />
                    <FormattedMessage
                        id={MessageId.ElectionListGoHome}
                        defaultMessage="Return to Home"
                    />
                </Button>
                <ElectionTable data={getElections()} />
            </Container>
        </Grid>
    );
};

export default ElectionListPage;
