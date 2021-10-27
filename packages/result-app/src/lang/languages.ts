import { MessageId, Locale, setupLanguages } from '@electionguard-ui/library/src/lang';
import EnumDictionary from '@electionguard-ui/library/src/utils/EnumDictionary';

import en from './en.json';

const languages = setupLanguages({ [Locale.English]: en as EnumDictionary<MessageId, string> });

export default languages;
