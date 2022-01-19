import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InternationalText from '../components/InternationalText';
import { MenuOptions, MenuOptionType, TypedMenuOption } from '../components/MenuOption';
import WelcomeHeader from '../components/WelcomeHeader';
import { Message, MessageId } from '../lang';

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
    const navigate = useNavigate();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <WelcomeHeader />
                <InternationalText id={MessageId.AppAbout} />
            </Container>
            <MenuOptions prompt={new Message(MessageId.MenuPrompt)}>
                <TypedMenuOption
                    onClick={() => navigate('/manage-users')}
                    type={MenuOptionType.ManageUsers}
                />{' '}
                <TypedMenuOption
                    onClick={() => navigate('/election')}
                    type={MenuOptionType.ManageElections}
                />{' '}
                <TypedMenuOption
                    onClick={() => navigate('/election-setup')}
                    type={MenuOptionType.SetupElection}
                />{' '}
                <TypedMenuOption
                    onClick={() => navigate('/key')}
                    type={MenuOptionType.ManageJointKeys}
                />{' '}
                <TypedMenuOption
                    onClick={() => navigate('/key-setup')}
                    type={MenuOptionType.SetupJointKeys}
                />{' '}
            </MenuOptions>
        </Grid>
    );
};

export default MenuPage;
