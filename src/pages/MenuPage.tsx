import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';

import { MenuOptionType, MenuOptions, TypedMenuOption } from '../components/MenuOption';
import InternationalText from '../components/InternationalText';
import WelcomeHeader from '../components/WelcomeHeader';
import { ConfigContext } from '../contexts/config';
import { Message, MessageId, loremIpsum } from '../lang';

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
                <InternationalText id={MessageId.AppAbout} defaultMessage={loremIpsum} />
            </Container>
            <MenuOptions
                prompt={new Message(MessageId.MenuPrompt, 'What do you want to do?')}
            >
                <TypedMenuOption type={MenuOptionType.ManageUsers} />
                <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
                <TypedMenuOption type={MenuOptionType.SetupElection} />
                <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
            </MenuOptions>
        </Grid>
    );
};

export default MenuPage;
