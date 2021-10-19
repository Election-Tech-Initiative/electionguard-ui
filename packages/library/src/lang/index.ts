import _Language from './Language';

export { default as GenericMessage, OverloadMessageId } from './GenericMessage';
export { getLanguage, setupLanguages } from './Language';

export type Language = _Language;
export { default as Locale } from './Locale';
export { default as loremIpsum } from './loremIpsum';

// TODO Remove redundant language files
export { default as MessageId } from './MessageId';
export { default as Message } from './Message';
export { default as languages } from './languages';
