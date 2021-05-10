import React from 'react';

import { ReactComponent as ElectionGuardLogo } from '../images/electionguard-logo.svg';
import Config from '../models/config';

export const defaultConfig: Config = {
    appName: 'ElectionGuard',
    logo: ElectionGuardLogo,
};

export const ConfigContext = React.createContext(defaultConfig);

export default ConfigContext;
