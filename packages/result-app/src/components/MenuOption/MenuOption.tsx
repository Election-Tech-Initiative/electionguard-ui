import { ButtonBase, Card, CardContent, SvgIconProps, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message } from '../../lang';
import InternationalText from '../InternationalText';

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
    title: Message;
    Icon: React.ComponentType<SvgIconProps>;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * A menu option card for the menu screens
 */
export const MenuOption: React.FC<MenuOptionProps> = ({ title, Icon, disabled, onClick }) => {
    const classes = useStyles();
    return (
        <Card elevation={10} className={classes.root}>
            <ButtonBase className={classes.clickable} disabled={disabled} onClick={onClick}>
                <CardContent className={classes.content}>
                    <Icon color="primary" fontSize="large" />
                    <InternationalText
                        className={classes.title}
                        color="textSecondary"
                        id={title.id}
                        defaultMessage={title.defaultMessage}
                    />
                </CardContent>
            </ButtonBase>
        </Card>
    );
};

export default MenuOption;
