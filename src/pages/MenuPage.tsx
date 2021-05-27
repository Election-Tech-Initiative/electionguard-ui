import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { MenuOptionType, MenuOptions, TypedMenuOption } from '../components/MenuOption';
import WelcomeHeader from '../components/WelcomeHeader';
import { ConfigContext } from '../contexts/config';
import { InternationalText } from '../models/internationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const MenuPage: React.FC = () => {
    const config = useContext(ConfigContext);
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <WelcomeHeader Logo={config.logo} />
                <Typography>
                    <FormattedMessage
                        id="app.about"
                        description="Introductory information about the application"
                        defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat magna nec nibh congue, non pretium mauris feugiat. Nam commodo ultrices semper. Praesent hendrerit ut nibh nec mollis. Ut fermentum maximus nibh nec vulputate. Fusce ultricies, arcu quis faucibus egestas, ligula tellus placerat orci, sed scelerisque nisl mi eu nisi. Quisque pulvinar justo justo, non tristique enim pretium non. Cras eu lacus gravida, eleifend magna at, ultricies tortor."
                    />
                </Typography>
            </Container>
            <MenuOptions prompt={new InternationalText('menu.prompt', 'What do you want to do?')}>
                <TypedMenuOption type={MenuOptionType.ManageUsers} />
                <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
                <TypedMenuOption type={MenuOptionType.SetupElection} />
                <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
            </MenuOptions>
        </Grid>
    );
};

export default MenuPage;
