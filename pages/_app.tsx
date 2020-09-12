import '../styles.css'
import I18Next from '../i18n'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import i18n from '../i18n'

const { _, publicRuntimeConfig } = getConfig()

const Layout  = ({ children }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <link rel="alternate" hrefLang="x-default" href={router.pathname}/>
        <link rel="alternate" hrefLang={publicRuntimeConfig.defaultLanguage} href={router.pathname}/>
        {publicRuntimeConfig.otherLanguages.map((lng) => {
          return <link rel="alternate" hrefLang={lng} href={`${router.pathname}?lng=${lng}`}/>
        })}
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default I18Next.appWithTranslation(MyApp)
