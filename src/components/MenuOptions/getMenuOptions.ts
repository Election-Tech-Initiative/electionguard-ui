import {
    AccountCircleOutlined,
    BallotOutlined,
    HowToVoteOutlined,
    LibraryAddCheckOutlined,
    LibraryAddOutlined,
    VpnKeyOutlined,
} from '@material-ui/icons';

import Permission from '../../models/permission';
import { MenuOptionProps } from '../MenuOption/MenuOption';

const getOption = (permission: Permission): MenuOptionProps | null => {
    switch (permission) {
        case Permission.ManageUsers:
            return {
                title: 'Manage Users',
                Icon: AccountCircleOutlined,
            };
        case Permission.BeginKeyCeremony:
            return {
                title: 'Begin Key Ceremony',
                Icon: VpnKeyOutlined,
            };
        case Permission.SetupElection:
            return {
                title: 'Setup Election',
                Icon: BallotOutlined,
            };
        case Permission.BeginTallyCeremony:
            return {
                title: 'Begin Tally Ceremony',
                Icon: LibraryAddCheckOutlined,
            };
        default:
            return null;
    }
};

const getMenuOptions = (permissions: Permission[]): MenuOptionProps[] => {
    const options: MenuOptionProps[] = [];
    permissions.forEach((permission) => {
        const option = getOption(permission);
        if (option) {
            options.push(option);
        }
    });
    return options;
};

export default getMenuOptions;
