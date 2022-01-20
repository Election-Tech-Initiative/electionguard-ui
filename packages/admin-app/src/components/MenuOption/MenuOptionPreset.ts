import { SvgIconProps } from '@mui/material';
import {
    AccountCircleOutlined,
    AddCircleOutlineOutlined,
    BallotOutlined,
    LibraryAddCheckOutlined,
    PublishOutlined,
    QuestionAnswer,
    VpnKeyOutlined,
} from '@mui/icons-material';

import { Message, MessageId, OverloadMessageId } from '../../lang';
import { MenuOptionType } from './MenuOptionType';

export default interface MenuOptionPreset {
    title: Message;
    Icon: React.ComponentType<SvgIconProps>;
}

export const getPreset = (type: MenuOptionType): MenuOptionPreset => {
    switch (type) {
        case MenuOptionType.ManageUsers:
            return {
                title: new Message(MessageId.MenuOption_ManageUsers),
                Icon: AccountCircleOutlined,
            };
        case MenuOptionType.BeginKeyCeremony:
            return {
                title: new Message(MessageId.MenuOption_JoinKeyCeremony),
                Icon: VpnKeyOutlined,
            };
        case MenuOptionType.SetupElection:
            return {
                title: new Message(MessageId.MenuOption_SetupElection),
                Icon: BallotOutlined,
            };
        case MenuOptionType.BeginTallyCeremony:
            return {
                title: new Message(MessageId.MenuOption_BeginTallyCeremony),
                Icon: LibraryAddCheckOutlined,
            };
        case MenuOptionType.UploadManifest:
            return {
                title: new Message(MessageId.MenuOption_UploadManifest),
                Icon: PublishOutlined,
            };
        case MenuOptionType.BuildManifest:
            return {
                title: new Message(MessageId.MenuOption_BuildManifest),
                Icon: AddCircleOutlineOutlined,
            };
        case MenuOptionType.ManageJointKeys:
            return {
                title: new Message(MessageId.MenuOption_ManageJointKeys),
                Icon: VpnKeyOutlined,
            };
        case MenuOptionType.ManageElections:
            return {
                title: new Message(MessageId.MenuOption_ManageElections),
                Icon: BallotOutlined,
            };
        case MenuOptionType.SetupJointKeys:
            return {
                title: new Message(MessageId.MenuOption_SetupJointKey),
                Icon: VpnKeyOutlined,
            };
        default:
            return {
                title: new Message(OverloadMessageId, 'Unknown'),
                Icon: QuestionAnswer,
            };
    }
};
