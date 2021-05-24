import { SvgIconProps } from '@material-ui/core';
import {
    AccountCircleOutlined,
    AddCircleOutlineOutlined,
    BallotOutlined,
    LibraryAddCheckOutlined,
    PublishOutlined,
    QuestionAnswer,
    VpnKeyOutlined,
} from '@material-ui/icons';

import { InternationalText, IntlText } from '../../models/internationalText';
import { MenuOptionType } from './MenuOptionType';

export default interface MenuOptionPreset {
    title: IntlText;
    Icon: React.ComponentType<SvgIconProps>;
}

export const getPreset = (type: MenuOptionType): MenuOptionPreset => {
    switch (type) {
        case MenuOptionType.ManageUsers:
            return {
                title: new InternationalText('menu.option.manage_users', 'Manage Users'),
                Icon: AccountCircleOutlined,
            };
        case MenuOptionType.BeginKeyCeremony:
            return {
                title: new InternationalText(
                    'menu.option.begin_key_ceremony',
                    'Begin Key Ceremony'
                ),
                Icon: VpnKeyOutlined,
            };
        case MenuOptionType.SetupElection:
            return {
                title: new InternationalText('menu.option.setup_election', 'Setup Election'),
                Icon: BallotOutlined,
            };
        case MenuOptionType.BeginTallyCeremony:
            return {
                title: new InternationalText(
                    'menu.option.begin_tally_ceremony',
                    'Begin Tally Ceremony'
                ),
                Icon: LibraryAddCheckOutlined,
            };
        case MenuOptionType.UploadManifest:
            return {
                title: new InternationalText('menu.option.upload_manifest', 'Upload Manifest'),
                Icon: PublishOutlined,
            };
        case MenuOptionType.BuildManifest:
            return {
                title: new InternationalText('menu.option.build_manifest', 'Build Manifest'),
                Icon: AddCircleOutlineOutlined,
            };
        default:
            return {
                title: new InternationalText('overload', 'Unknown'),
                Icon: QuestionAnswer,
            };
    }
};
