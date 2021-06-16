import { makeStyles } from '@material-ui/core';
import { Brightness3 as DisabledIcon, Brightness1 as Icon } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Message } from '../../lang';
import FormattedButton, { FormattedButtonProps } from './FormattedButton';

export default {
    title: 'Components/FormattedButton',
    component: FormattedButton,
} as Meta;

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}));

const Template: Story<FormattedButtonProps> = (props) => {
    const classes = useStyles();
    return (
        <div>
            <FormattedButton
                {...props}
                className={classes.root}
                Icon={Icon}
                DisabledIcon={DisabledIcon}
                variant="contained"
                color="primary"
            />
            <FormattedButton
                {...props}
                className={classes.root}
                Icon={Icon}
                DisabledIcon={DisabledIcon}
                variant="contained"
                color="primary"
                loading
            />
            <FormattedButton
                {...props}
                className={classes.root}
                Icon={Icon}
                DisabledIcon={DisabledIcon}
                variant="contained"
                color="primary"
                disabled
            />
            <FormattedButton
                {...props}
                className={classes.root}
                variant="contained"
                color="secondary"
            />
            <FormattedButton
                {...props}
                className={classes.root}
                variant="contained"
                color="secondary"
                loading
            />
            <FormattedButton
                {...props}
                className={classes.root}
                variant="contained"
                color="secondary"
                disabled
            />
        </div>
    );
};

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    text: new Message('overload', 'Submit'),
    disabledText: new Message('overload', 'Disabled'),
};
