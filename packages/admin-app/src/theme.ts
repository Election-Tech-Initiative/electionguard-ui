import {
    amber,
    blue,
    blueGrey,
    brown,
    cyan,
    deepOrange,
    deepPurple,
    green,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow,
} from '@mui/material/colors';
import { Theme, DeprecatedThemeOptions, createTheme, adaptV4Theme } from '@mui/material/styles';

const midnightBlue = '#002a84';

const colorSet: string[] = [
    orange[700],
    pink[700],
    deepPurple[700],
    blue[700],
    cyan[700],
    amber[700],
    blueGrey[700],
    purple[700],
    red[700],
    yellow[700],
    brown[700],
    deepOrange[700],
    green[700],
    indigo[700],
    lightBlue[700],
    lightGreen[700],
    lime[700],
    teal[700],
];

export const getColor = (index: number): string => colorSet[index % colorSet.length];

export const theme = (): Theme => {
    const options: DeprecatedThemeOptions = {
        palette: {
            primary: teal,
            secondary: {
                main: midnightBlue,
            },
        },
    };
    return createTheme(adaptV4Theme(options));
};

export default theme;
