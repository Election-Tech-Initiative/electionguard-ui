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
} from '@material-ui/core/colors';
import { Localization } from '@material-ui/core/locale';
import { Theme, ThemeOptions, createTheme } from '@material-ui/core/styles';

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

export const theme = (localization?: Localization): Theme => {
    const options: ThemeOptions = {
        palette: {
            primary: teal,
            secondary: {
                main: midnightBlue,
            },
        },
    };
    return localization ? createTheme(options, localization) : createTheme(options);
};

export default theme;
