import configDecorator from './decorators/configDecorator';
import languageDecorator, { languageGlobals } from './decorators/languageDecorator';
import themeDecorator from './decorators/themeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { hideNoControlsWarning: true },
    layout: 'centered',
};

export const globalTypes = {
    ...languageGlobals,
};

export const decorators = [themeDecorator, languageDecorator, configDecorator];
