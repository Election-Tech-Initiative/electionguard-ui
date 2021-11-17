import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const circleSize = 40;

const useStyles = makeStyles((theme) => ({
    root: {
        listStyle: 'none',
        paddingLeft: 0,
    },
    item: {
        marginBottom: theme.spacing(2),
    },
    circle: {
        backgroundColor: theme.palette.primary.main,
        minWidth: circleSize,
        minHeight: circleSize,
        marginTop: 5,
        marginRight: theme.spacing(2),
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
}));

/**
 * An ordered list with material ui style numbers
 */
export const OrderedList: React.FC = ({ children }) => {
    const classes = useStyles();
    const circle = (index: number) => (
        <Box boxShadow={4} className={classes.circle}>
            {index}
        </Box>
    );
    return (
        <ol className={classes.root}>
            {React.Children.map(children, (child, i) => (
                <li className={classes.item}>
                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
                        {circle(i + 1)}
                        {child}
                    </Box>
                </li>
            ))}
        </ol>
    );
};

export default OrderedList;
