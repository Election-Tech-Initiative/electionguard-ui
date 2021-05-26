import { MessageDescriptor } from '@formatjs/intl';

import MessageId, { OverloadableMessageId } from './MessageId';

const placeholder = 'placeholder';

export class Message implements MessageDescriptor {
    id: OverloadableMessageId;

    defaultMessage: string;

    description?: string;

    constructor(
        id: OverloadableMessageId = MessageId.Placeholder,
        defaultMessage = placeholder,
        description?: string
    ) {
        this.id = id;
        this.defaultMessage = defaultMessage;
        this.description = description;
    }
}

export default Message;
