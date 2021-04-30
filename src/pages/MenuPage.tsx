import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import MenuOptions from '../components/MenuOptions';
import WelcomeHeader from '../components/WelcomeHeader';
import config from '../config';
import Permission from '../models/permission';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

// TODO Remove menu page set information
const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat magna nec nibh congue, non pretium mauris feugiat. Nam commodo ultrices semper. Praesent hendrerit ut nibh nec mollis. Ut fermentum maximus nibh nec vulputate. Fusce ultricies, arcu quis faucibus egestas, ligula tellus placerat orci, sed scelerisque nisl mi eu nisi. Quisque pulvinar justo justo, non tristique enim pretium non. Cras eu lacus gravida, eleifend magna at, ultricies tortor.';
const menuPrompt = 'What would you like to do?';
const permissions = [
    Permission.ManageUsers,
    Permission.BeginKeyCeremony,
    Permission.SetupElection,
    Permission.BeginTallyCeremony,
];

const MenuPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <WelcomeHeader Logo={config.logo} />
                <Typography>{description}</Typography>
            </Container>
            <MenuOptions prompt={menuPrompt} permissions={permissions} />
        </Grid>
    );
};

export default MenuPage;
