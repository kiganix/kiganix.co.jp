import css from './index.module.css'
import Head from 'next/head'
import I18Next from '../i18n'
import getConfig from 'next/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { shuffle } from 'd3-array'
import { TFunction, WithTranslation } from 'next-i18next'
import { useTranslation } from 'react-i18next'
import { GetServerSideProps, NextPageContext } from 'next'
import Link from 'next/link'
import { Section } from '../components/about/Section'
import { HeroImage } from '../components/about/HeroImage'
import { SectionHeader } from '../components/about/SectionHeader'
import { buildTitle } from '../utils'

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

function AboutKiganix() {
    return <Section>
        <HeroImage
            src="https://kiganix.imgix.net/static/penguin.png?w=800&amp;auto=compress"/>
        合同会社キガニックスは、東京都昭島市を拠点とするテクノロジー企業です。<br/>
        ソフトウェア技術をレバレッジに効率化を推し進め、様々な関連事業を企画・展開しています。
        <IndexTable/>
    </Section>
}

function IndexTable() {
    const { t } = useTranslation()

    return <table className={css.details}>
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
                <th>GLN</th>
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
                <th>{t('label-for-ceo')}</th>
                <td><a href="https://github.com/S64" target="_blank">{t('ceo')}</a></td>
            </tr>
            <tr>
                <th>{t('label-for-newsletter')}</th>
                <td><a href="https://newsletter.kiganix.com" target="_blank">Kiganix Newsletter</a></td>
            </tr>
        </tbody>
    </table>
}

const Index = ({ t, i18n, shuffledClients }: Props) => (
    <>
        <Head>
            <title lang={i18n.language}>{buildTitle(t)}</title>
        </Head>
        <AboutKiganix/>
        <Section>
            <SectionHeader text={t('our-clients')}/>
            <ul>
                { shuffledClients.map((itr) => <ClientListItem key={itr.nameKey} client={itr} t={t} />) }
            </ul>
        </Section>
    </>
)

export default I18Next.withTranslation()(Index)
