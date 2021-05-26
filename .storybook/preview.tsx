import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import configDecorator from './decorators/configDecorator';
import languageDecorator, { languageGlobals } from './decorators/languageDecorator';
import themeDecorator from './decorators/themeDecorator';

const customViewports = {
    surfaceGo: {
        name: 'Surface Go',
        styles: {
            width: '1920px',
            height: '1280px',
        },
    },
    surfacePro: {
        name: 'Surface Pro',
        styles: {
            width: '2736px',
            height: '1824px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { hideNoControlsWarning: true },
    layout: 'centered',
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
};

export const globalTypes = {
    ...languageGlobals,
};

export const decorators = [themeDecorator, languageDecorator, configDecorator];
