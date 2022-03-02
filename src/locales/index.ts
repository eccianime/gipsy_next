import generalPT_BR from './pt-BR/general.json';
import modelsPT_BR from './pt-BR/models.json';
import validationsPT_BR from './pt-BR/validations.json';
import validationMessagesPT_BR from './pt-BR/validationsMessages.json';
import viewsPT_BR from './pt-BR/views.json';

import generalEN from './en/general.json';
import modelsEN from './en/models.json';
import validationsEN from './en/validations.json';
import validationMessagesEN from './en/validationsMessages.json';
import viewsEN from './en/views.json';

import generalES from './es/general.json';
import modelsES from './es/models.json';
import validationsES from './es/validations.json';
import validationMessagesES from './es/validationsMessages.json';
import viewsES from './es/views.json';

import generalPT from './pt/general.json';
import modelsPT from './pt/models.json';
import validationsPT from './pt/validations.json';
import validationMessagesPT from './pt/validationsMessages.json';
import viewsPT from './pt/views.json';

const langs: { [x: string]: any } = {
    'pt-BR': {
        general: generalPT_BR,
        models: modelsPT_BR,
        validations: validationsPT_BR,
        validationMessages: validationMessagesPT_BR,
        views: viewsPT_BR,
    },
    en: {
        general: generalEN,
        models: modelsEN,
        validations: validationsEN,
        validationMessages: validationMessagesEN,
        views: viewsEN,
    },
    es: {
        general: generalES,
        models: modelsES,
        validations: validationsES,
        validationMessages: validationMessagesES,
        views: viewsES,
    },
    pt: {
        general: generalPT,
        models: modelsPT,
        validations: validationsPT,
        validationMessages: validationMessagesPT,
        views: viewsPT,
    }
}

export const getTranslations = (language: string) => langs[language]