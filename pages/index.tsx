import css from './index.module.css'
import Head from 'next/head'
import I18Next from '../i18n'
import getConfig from 'next/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { shuffle } from 'd3-array'
import { TFunction, WithTranslation } from 'next-i18next'
import { GetServerSideProps, NextPageContext } from 'next'
import Link from 'next/link'

const { _, publicRuntimeConfig } = getConfig()

type Client = { nameKey: string, url: string, asideKey: string | null }

const clients: Client[] = [
    { nameKey: 'vg-inc', url: 'https://voyagegroup.com', asideKey: 'vg-inc-aside' },
    { nameKey: 'sepori-inc', url: 'https://www.flinters.co.jp', asideKey: 'sepori-inc-aside' },
    { nameKey: 'seisa-kokusai', url: 'https://www.seisagroup.jp', asideKey: 'seisa-kokusai-aside' },
    { nameKey: 'gmo-cn-inc', url: 'https://my.freenance.net/profile/e92rcxVC', asideKey: null },
    { nameKey: 'degica-co-ltd', url: 'https://degica.jp', asideKey: null },
    { nameKey: 'nextone-inc', url: 'https://www.nex-tone.co.jp', asideKey: null },
]

const ClientListItem = ({ client, t }: { client: Client, t: TFunction }) => {
    return <li>
        <a href={client.url} target="_blank">{t(client.nameKey)}</a>{
            client.asideKey ? <>&nbsp;<span>{t(client.asideKey)}</span></> : <></>
        }
    </li>
}

type SSP = {
    shuffledClients: Client[],
}
type Props = WithTranslation & NextPageContext & SSP

export const getServerSideProps: GetServerSideProps<SSP> = async (context) => {
    return {
      props: {
        shuffledClients: shuffle(clients),
      }
    }
  }

const Index = ({ t, i18n, shuffledClients }: Props) => (
    <>
        <Head>
            <title lang={i18n.language}>{t('title')}</title>
        </Head>
        <div className={css.index}>
            <div className={css.locales}>
                <span>Language: </span>
                <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value) }>
                    {[publicRuntimeConfig.defaultLanguage, ...publicRuntimeConfig.otherLanguages].map((lng) => {
                        return <option value={lng}>{lng}</option>
                    })}
                </select>
            </div>
            <h1>{t('heading')}</h1>
            <table className={css.details}>
                <tbody>
                    <tr>
                        <th>{t('label-for-company-legal-name')}</th>
                        <td>{t('company-legal-name')}</td>
                    </tr>
                    <tr>
                        <th>{t('label-for-company-number')}</th>
                        <td>
                            <a href={t('nta-company-number')} target="_blank">8012803002172</a>
                            <a href={t('about-nta-company-number')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className={css.infomark}/></a>
                        </td>
                    </tr>
                    <tr>
                        <th>D-U-N-S® Number</th>
                        <td>
                            <a href="https://www.dnb.com/business-directory/company-profiles.kiganix_gk.f60e4dc6c2c6e86e360766f860bc0950.html" target="_blank">718232158</a>
                            <a href={t('about-duns-number')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className={css.infomark}/></a>
                        </td>
                    </tr>
                    <tr>
                        <th>GS1 Company Prefix</th>
                        <td>
                            <span>457151931</span>
                            <a href={t('about-gs1prefix')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className={css.infomark}/></a>
                        </td>
                    </tr>
                    <tr>
                        <th>Global Location Number (GLN)</th>
                        <td>
                            <span>4571519310004</span>
                            <a href={t('about-gln')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className={css.infomark}/></a>
                        </td>
                    </tr>
                    <tr>
                        <th>{t('label-for-corporate-website')}</th>
                        <td>
                            <span>https://kiganix.co.jp</span>
                            <a href={t('about-organizational-jp-domain')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className={css.infomark}/></a>
                        </td>
                    </tr>
                    <tr>
                        <th>{t('label-for-foundation-date')}</th>
                        <td>{t('foundation-date')}</td>
                    </tr>
                    <tr>
                        <th>{t('label-for-about')}</th>
                        <td><Link href="/about">{t('about')}</Link></td>
                    </tr>
                    <tr>
                        <th>{t('label-for-ceo')}</th>
                        <td><a href="https://github.com/S64" target="_blank">{t('ceo')}</a></td>
                    </tr>
                    <tr>
                        <th>{t('label-for-our-business')}</th>
                        <td>
                            <ul>
                                <li><a href="https://lapras.com/public/AQNWBZV" target="_blank">{t('entrusted-software-development')}</a></li>
                                <li><a href="https://seminar.kiganix.com" target="_blank">{t('educational-business')}</a></li>
                                <li><a href="https://music.kiganix.com" target="_blank">{t('music-publishing')}</a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>{t('label-for-newsletter')}</th>
                        <td><a href="https://newsletter.kiganix.com" target="_blank">Kiganix Newsletter</a></td>
                    </tr>
                    <tr>
                        <th>{t('label-for-contact-us')}</th>
                        <td><a href="https://www.notion.so/kiganix/88616ab67c394875941b5cb1ef438e00" target="_blank">{t('contact-methods')}</a></td>
                    </tr>
                </tbody>
            </table>
            <h2>{t('our-clients')}</h2>
            <ul>
                { shuffledClients.map((itr) => <ClientListItem key={itr.nameKey} client={itr} t={t} />) }
            </ul>
            <div className={css.github}>
                    <a href="https://github.com/kiganix/kiganix.co.jp" target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
            </div>
        </div>
    </>
)

export default I18Next.withTranslation()(Index)
