import { Localization } from '@material-ui/core/locale';

export default interface Language {
    name: string;
    locale: string;
    messages: { [key: string]: string };
    mui: Localization;
}
