import { CssBaseline } from '@material-ui/core';
import {
    MuiThemeProvider,
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';

import theme from '../../src/theme';

export default function contextDecorator(Story) {
    // Ensures that the unique counter numbers for classNames are reset on each story.
    const generateClassName = createGenerateClassName();

    return (
        <StylesProvider generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </MuiThemeProvider>
        </StylesProvider>
    );
}
