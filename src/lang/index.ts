import { enUS } from '@material-ui/core/locale';

import Language from '../models/language';
import en from './en.json';

export const supported = {
    english: {
        name: 'English',
        locale: 'en',
        messages: en,
        mui: enUS,
    },
};

export const getLanguage = (): Language => {
    const locale = navigator.language;
    switch (locale) {
        case 'en':
            return supported.english;
        default:
            return supported.english;
    }
};

export const loremIpsum = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Etiam a egestas dui. 
Etiam eget sem quis lorem pharetra viverra. Mauris rhoncus 
ultricies urna, sit amet bibendum libero gravida et. Praesent 
dictum sed sapien et auctor. Quisque porttitor purus arcu, ac 
faucibus mi finibus id. Etiam semper lorem sem. Integer blandit, 
quam eget accumsan accumsan, ante lorem ullamcorper ipsum, eget
 egestas lectus dui nec ante. Praesent scelerisque lacinia 
 purus a lacinia.`;
