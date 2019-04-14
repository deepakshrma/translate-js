declare global {
    interface String {
        toLocale() : string;
    }
}
const config = {
    messages: {},
    locale: 'en'
} as any;

export const addLocale = (message: any) => {
    for(let locale in message) {
        if(!config.messages[locale]) config.messages[locale] = {}
        config.messages[locale] = {
            ...config.messages[locale],
            ...message[locale]
        }
    }
}
export const setLocale = (locale: string) => {
    config.locale = locale
}
String.prototype.toLocale = function () {
    return config.messages[config.locale][this as string] || this as any
}

