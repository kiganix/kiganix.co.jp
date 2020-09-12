import NextI18Next from 'next-i18next'
import path from 'path'
import getConfig from 'next/config'

const { _, publicRuntimeConfig } = getConfig()

export default new NextI18Next({
    debug: false,
    defaultLanguage: publicRuntimeConfig.defaultLanguage,
    otherLanguages: publicRuntimeConfig.otherLanguages,
    fallbackLng: publicRuntimeConfig.defaultLanguage,
    defaultNS: 'common',
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    detection: {
        caches: [],
        order: [ 'querystring' ],
    },
    localePath: path.resolve('./public/static/locales'),
    localeStructure: '{{lng}}/{{ns}}',
    localeExtension: 'json',
})
