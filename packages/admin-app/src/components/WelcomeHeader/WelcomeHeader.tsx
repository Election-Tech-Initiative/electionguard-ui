import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { SVGProps } from 'react';

import { MessageId } from '../../lang';
import InternationalText from '../InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.grey[600],
        fill: theme.palette.grey[600],
    },
    welcomeText: {
        fontSize: '1.5rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
    },
    logo: {
        marginTop: -theme.spacing(2),
        fill: 'inherit',
        height: 45,
        width: 250,
        [theme.breakpoints.up('sm')]: {
            height: 90,
            width: 500,
        },
    },
}));

export interface WelcomeHeaderProps {
    Logo?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * A menu option card for the menu screens
 */
export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ Logo }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item>
                <InternationalText
                    variant="h3"
                    component="span"
                    className={classes.welcomeText}
                    id={MessageId.AppGreeting}
                    description="Greeting to welcome the user to the app"
                />
            </Grid>
            {Logo && (
                <Grid item>
                    <Logo className={classes.logo} />
                </Grid>
            )}
        </Grid>
    );
};

export default WelcomeHeader;
