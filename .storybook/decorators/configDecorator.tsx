import React from 'react';

import { ConfigContext, defaultConfig } from '../../src/contexts/config';

export default function configDecorator(Story) {
    return (
        <ConfigContext.Provider value={defaultConfig}>
            <Story />
        </ConfigContext.Provider>
    );
}
