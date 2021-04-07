import '../styles.css'
import css from './_app.module.css'
import I18Next from '../i18n'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import i18n from '../i18n'
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import { GlobalHeader } from '../components/GlobalHeader'
import { GlobalFooter } from '../components/GlobalFooter'
import React from 'react'

const { _, publicRuntimeConfig } = getConfig()

faConfig.autoAddCss = false

type Props = {
}

const Layout  = (props: React.PropsWithChildren<Props>) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <link rel="alternate" hrefLang="x-default" href={router.pathname}/>
        <link rel="alternate" hrefLang={publicRuntimeConfig.defaultLanguage} href={router.pathname}/>
        {publicRuntimeConfig.otherLanguages.map((lng) => {
          return <link rel="alternate" hrefLang={lng} href={`${router.pathname}?lng=${lng}`}/>
        })}
        <>
            <script
            dangerouslySetInnerHTML={{
                __html: `
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o2yr9');
twq('track','PageView');
                `
            }}/>
        </>
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2488404988044456');
fbq('track', 'PageView');
                    `
                }}/>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=2488404988044456&ev=PageView&noscript=1"/>
            </noscript>
        </>
        <>
            <script
                async={true}
                src="https://www.googletagmanager.com/gtag/js?id=UA-156087543-1"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-675260250');
gtag('config', 'UA-156087543-1');
                    `
                }}/>
        </>
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&amp;family=Roboto:wght@400;700;900&amp;display=swap" rel="stylesheet"/>
        </>
      </Head>
      <div>
        <GlobalHeader/>
        <div className={css.container}>
            {props.children}
        </div>
        <GlobalFooter/>
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
