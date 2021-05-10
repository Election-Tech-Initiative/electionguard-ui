import {
    ButtonBase,
    Card,
    CardContent,
    SvgIconProps,
    Typography,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { InternationalText } from '../../models/internationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 144,
        width: 144,
        margin: theme.spacing(2),
    },
    clickable: {
        width: '100%',
        height: '100%',
        paddingTop: theme.spacing(2),

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
    },
}));

export interface MenuOptionProps {
    title: InternationalText;
    Icon: React.ComponentType<SvgIconProps>;
}

/**
 * A menu option card for the menu screens
 */
const MenuOption: React.FC<MenuOptionProps> = ({ title, Icon }) => {
    const classes = useStyles();
    return (
        <Card elevation={10} className={classes.root}>
            <ButtonBase className={classes.clickable} onClick={() => {}}>
                <CardContent className={classes.content}>
                    <Icon color="primary" fontSize="large" />
                    <Typography className={classes.title} color="textSecondary">
                        <FormattedMessage
                            id={title.id}
                            description={`Menu option of ${title.defaultText}`}
                            defaultMessage={title.defaultText}
                        />
                    </Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    );
};

export default MenuOption;
