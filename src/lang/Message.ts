import { MessageDescriptor } from '@formatjs/intl';

import MessageId from './MessageId';

const PLACEHOLDER_TEXT = 'placeholder';

export class Message implements MessageDescriptor {
    id: MessageId;

    defaultMessage: string;

    description?: string;

    constructor(
        id = MessageId.Placeholder,
        defaultMessage = PLACEHOLDER_TEXT,
        description?: string
    ) {
        this.id = id;
        this.defaultMessage = defaultMessage;
        this.description = description;
    }
}

export default Message;
