// TODO Remove after migration to Admin App
import MessageId from './MessageId';
import Locale from './Locale';
import { setupLanguages } from './Language';
import EnumDictionary from '../utils/EnumDictionary';

import en from './en.json';

const languages = setupLanguages({ [Locale.English]: en as EnumDictionary<MessageId, string> });

export default languages;
