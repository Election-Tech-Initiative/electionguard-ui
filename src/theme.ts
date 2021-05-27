import { teal } from '@material-ui/core/colors';
import { Localization } from '@material-ui/core/locale';
import { Theme, ThemeOptions, createMuiTheme } from '@material-ui/core/styles';

const midnightBlue = '#002a84';

const theme = (localization?: Localization): Theme => {
    const options: ThemeOptions = {
        palette: {
            primary: teal,
            secondary: {
                main: midnightBlue,
            },
        },
    };
    return localization ? createMuiTheme(options, localization) : createMuiTheme(options);
};

export default theme;
