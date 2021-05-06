import contextDecorator from './decorators/contextDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { hideNoControlsWarning: true },
    layout: 'centered',
};

export const decorators = [contextDecorator];
