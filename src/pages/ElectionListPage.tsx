import { Button, Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import ElectionTable from '../components/ElectionTable';
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
                <Typography className={classes.spaced} variant="h3" component="h1">
                    <FormattedMessage id="election_list.title" defaultMessage="Election List" />
                </Typography>
                <Typography className={classes.spaced}>
                    <FormattedMessage
                        id="election_list.description"
                        defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat magna nec nibh congue, non pretium mauris feugiat. Nam commodo ultrices semper. Praesent hendrerit ut nibh nec mollis. Ut fermentum maximus nibh nec vulputate. Fusce ultricies, arcu quis faucibus egestas, ligula tellus placerat orci, sed scelerisque nisl mi eu nisi. Quisque pulvinar justo justo, non tristique enim pretium non. Cras eu lacus gravida, eleifend magna at, ultricies tortor."
                    />
                </Typography>
                <Button className={classes.spaced} variant="contained" color="secondary">
                    <Home className={classes.buttonIcon} />
                    <FormattedMessage id="election_list.go_home" defaultMessage="Return to Home" />
                </Button>
                <ElectionTable data={getElections()} />
            </Container>
        </Grid>
    );
};

export default ElectionListPage;
