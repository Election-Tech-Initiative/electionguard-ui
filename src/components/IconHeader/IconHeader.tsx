import { Box, SvgIconProps, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { IntlText } from '../../models/internationalText';

const iconSize = 64;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        fontSize: iconSize,
        [theme.breakpoints.up('sm')]: {
            fontSize: iconSize * 2,
        },
    },
}));

export interface IconHeaderProps {
    title: IntlText;
    Icon?: React.ComponentType<SvgIconProps>;
}

/**
 * A menu option card for the menu screens
 */
const IconHeader: React.FC<IconHeaderProps> = ({ Icon, title }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} display="flex" flexDirection="column" alignItems="center">
            {Icon && <Icon color="primary" fontSize="inherit" />}
            <Typography variant="h3" component="h1">
                <FormattedMessage
                    id={title.id}
                    description="Heading of header for section"
                    defaultMessage={title.defaultText}
                />
            </Typography>
        </Box>
    );
};

export default IconHeader;
