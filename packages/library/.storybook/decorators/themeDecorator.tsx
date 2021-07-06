import { CssBaseline } from '@material-ui/core';
import {
    MuiThemeProvider,
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import React, { useContext } from 'react';

import { LanguageContext } from '../../src/contexts/language';
import theme from '../../src/theme';

export default function contextDecorator(Story) {
    // Ensures that the unique counter numbers for classNames are reset on each story.
    const generateClassName = createGenerateClassName();
    const language = useContext(LanguageContext);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme(language.mui)}>
                <CssBaseline />
                <Story />
            </MuiThemeProvider>
        </StylesProvider>
    );
}
