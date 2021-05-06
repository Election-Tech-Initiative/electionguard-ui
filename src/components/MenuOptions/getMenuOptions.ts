import {
    AccountCircleOutlined,
    BallotOutlined,
    LibraryAddCheckOutlined,
    VpnKeyOutlined,
} from '@material-ui/icons';

import { InternationalText } from '../../models/internationalText';
import Permission from '../../models/permission';
import { MenuOptionProps } from '../MenuOption/MenuOption';

const getOption = (permission: Permission): MenuOptionProps | null => {
    switch (permission) {
        case Permission.ManageUsers:
            return {
                title: new InternationalText('menu.option.manage_users', 'Manage Users'),
                Icon: AccountCircleOutlined,
            };
        case Permission.BeginKeyCeremony:
            return {
                title: new InternationalText(
                    'menu.option.begin_key_ceremony',
                    'Begin Key Ceremony'
                ),
                Icon: VpnKeyOutlined,
            };
        case Permission.SetupElection:
            return {
                title: new InternationalText('menu.option.setup_election', 'Setup Election'),
                Icon: BallotOutlined,
            };
        case Permission.BeginTallyCeremony:
            return {
                title: new InternationalText(
                    'menu.option.begin_tally_ceremony',
                    'Begin Tally Ceremony'
                ),
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
