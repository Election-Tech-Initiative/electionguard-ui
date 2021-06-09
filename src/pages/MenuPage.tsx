import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import InternationalText from '../components/InternationalText';
import { MenuOptionType, MenuOptions, TypedMenuOption } from '../components/MenuOption';
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
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <WelcomeHeader Logo={config.logo} />
                <InternationalText id={MessageId.AppAbout} defaultMessage={loremIpsum} />
            </Container>
            <MenuOptions prompt={new Message(MessageId.MenuPrompt)}>
                <TypedMenuOption
                    onClick={() => history.push('/key-ceremony')}
                    type={MenuOptionType.BeginKeyCeremony}
                />
                <TypedMenuOption
                    onClick={() => history.push('/election')}
                    type={MenuOptionType.ManageElections}
                />
                <TypedMenuOption
                    onClick={() => history.push('/election-setup')}
                    type={MenuOptionType.SetupElection}
                />
                <TypedMenuOption
                    onClick={() => history.push('/joint-key')}
                    type={MenuOptionType.ManageJointKeys}
                />
            </MenuOptions>
        </Grid>
    );
};

export default MenuPage;
