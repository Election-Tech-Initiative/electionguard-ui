import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.grey[800],
        height: theme.spacing(4),
        flexShrink: 0,
    },
}));

/**
 * A persistent footer for additional content
 */
export const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    return <Box className={classes.root} />;
};

export default Footer;
