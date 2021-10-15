import { MessageDescriptor } from '@formatjs/intl';

const OverloadMessageId = 'overload';

const PlaceHolderMessageId = 'placeholder';

const placeholderMessage = 'Message Not Found';

export default class GenericMessage<T extends string | number> implements MessageDescriptor {
    id: T | typeof OverloadMessageId | typeof PlaceHolderMessageId;

    defaultMessage: string;

    description?: string;

    constructor(
        id: T | typeof OverloadMessageId | typeof PlaceHolderMessageId = PlaceHolderMessageId,
        defaultMessage = placeholderMessage,
        description?: string
    ) {
        this.id = id;
        this.defaultMessage = defaultMessage;
        this.description = description;
    }
}

export type GenericMessageDescriptor = MessageDescriptor;
