import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ua', 'ru']

export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as any)) notFound();
    return {
        messages: (await import(`../localization/${locale}.json`)).default
    };
});