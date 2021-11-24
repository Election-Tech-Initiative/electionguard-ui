import React, { SVGProps } from 'react';

export interface Config {
    appName: string;
    logo: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export default Config;
