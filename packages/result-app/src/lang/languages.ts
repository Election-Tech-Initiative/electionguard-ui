import { MessageId, Locale, setupLanguages, EnumDictionary } from '@electionguard-ui/library';

import en from './en.json';

const languages = setupLanguages({ [Locale.English]: en as EnumDictionary<MessageId, string> });

export default languages;
