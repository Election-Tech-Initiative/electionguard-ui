import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import InternationalText from '../components/InternationalText';
import { Message, MessageId } from '../lang';

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

export interface ListPageLayoutProps {
    title: Message;
    description: Message;
    goHome?: () => void;
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({
    title,
    description,
    goHome,
    children,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="lg" className={classes.content}>
                <InternationalText
                    className={classes.spaced}
                    variant="h3"
                    component="h1"
                    id={title.id}
                    defaultMessage={title.defaultMessage}
                />
                <InternationalText
                    className={classes.spaced}
                    id={description.id}
                    defaultMessage={description.defaultMessage}
                />
                <Button
                    className={classes.spaced}
                    variant="contained"
                    color="secondary"
                    onClick={goHome}
                >
                    <Home className={classes.buttonIcon} />
                    <FormattedMessage id={MessageId.Nav_Return_Home} />
                </Button>
                {children}
            </Container>
        </Grid>
    );
};

export default ListPageLayout;
