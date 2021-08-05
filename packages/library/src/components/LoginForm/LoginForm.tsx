import { Button, Grid, TextField, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageId } from '../../lang';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        padding: theme.spacing(2),
    },
}));

export interface LoginFormProps {
    onSubmit?: () => void;
}

/**
 * Form for logging user in
 */
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const classes = useStyles();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (onSubmit) {
                    onSubmit();
                }
            }}
            className={classes.root}
            noValidate
        >
            <Grid container alignItems="flex-end" spacing={2}>
                <Grid item xs={12}>
                    <FormattedMessage id={MessageId.LoginFormUsername} defaultMessage="Username">
                        {(message) => <TextField fullWidth variant="outlined" label={message} />}
                    </FormattedMessage>
                </Grid>
                <Grid item xs={12}>
                    <FormattedMessage id={MessageId.LoginFormPassword} defaultMessage="Password">
                        {(message) => (
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="password"
                                label={message}
                            />
                        )}
                    </FormattedMessage>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="secondary">
                        <FormattedMessage
                            id={MessageId.LoginFormSubmit}
                            description="Action to log in to application"
                            defaultMessage="Submit"
                        />
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
