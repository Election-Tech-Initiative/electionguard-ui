import React, { SVGProps } from 'react';

export interface Config {
    appName: string;
    logo?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const defaultConfig: Config = {
    appName: 'Unknown App',
    logo: undefined,
};

export const ConfigContext = React.createContext(defaultConfig);

export default ConfigContext;
