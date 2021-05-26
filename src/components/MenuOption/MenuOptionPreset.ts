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

import { Message, MessageId } from '../../lang';
import { MenuOptionType } from './MenuOptionType';

export default interface MenuOptionPreset {
    title: Message;
    Icon: React.ComponentType<SvgIconProps>;
}

export const getPreset = (type: MenuOptionType): MenuOptionPreset => {
    switch (type) {
        case MenuOptionType.ManageUsers:
            return {
                title: new Message(MessageId.MenuOptionManageUsers, 'Manage Users'),
                Icon: AccountCircleOutlined,
            };
        case MenuOptionType.BeginKeyCeremony:
            return {
                title: new Message(MessageId.MenuOptionBeginKeyCeremony, 'Begin Key Ceremony'),
                Icon: VpnKeyOutlined,
            };
        case MenuOptionType.SetupElection:
            return {
                title: new Message(MessageId.MenuOptionSetupElection, 'Setup Election'),
                Icon: BallotOutlined,
            };
        case MenuOptionType.BeginTallyCeremony:
            return {
                title: new Message(MessageId.MenuOptionBeginTallyCeremony, 'Begin Tally Ceremony'),
                Icon: LibraryAddCheckOutlined,
            };
        case MenuOptionType.UploadManifest:
            return {
                title: new Message(MessageId.MenuOptionUploadManifest, 'Upload Manifest'),
                Icon: PublishOutlined,
            };
        case MenuOptionType.BuildManifest:
            return {
                title: new Message(MessageId.MenuOptionBuildManifest, 'Build Manifest'),
                Icon: AddCircleOutlineOutlined,
            };
        default:
            return {
                title: new Message(MessageId.Overload, 'Unknown'),
                Icon: QuestionAnswer,
            };
    }
};
