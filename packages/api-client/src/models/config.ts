import React, { SVGProps } from 'react';

export default interface Config {
    appName: string;
    logo: React.ComponentType<SVGProps<SVGSVGElement>>;
}
