import { TFunction } from 'next-i18next'

export function buildTitle(t: TFunction, title?: string) {
    if (title) {
        return `${title} | ${t('title')}`
    } else {
        return t('title')
    }
}
