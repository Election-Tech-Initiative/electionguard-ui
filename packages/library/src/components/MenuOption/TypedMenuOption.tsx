import React from 'react';

import MenuOption from './MenuOption';
import { getPreset } from './MenuOptionPreset';
import { MenuOptionType } from './MenuOptionType';

export interface TypedMenuOptionProps {
    type: MenuOptionType;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * A typed menu option card for the menu screens
 */
export const TypedMenuOption: React.FC<TypedMenuOptionProps> = ({ type, disabled, onClick }) => {
    const { title, Icon } = getPreset(type);
    return <MenuOption title={title} Icon={Icon} disabled={disabled} onClick={onClick} />;
};

export default TypedMenuOption;
