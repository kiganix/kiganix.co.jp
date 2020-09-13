
import Head from 'next/head'
import I18Next from '../i18n'
import getConfig from 'next/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { shuffle } from 'd3-array'

const { _, publicRuntimeConfig } = getConfig()

const clients: { nameKey: string, url: string, asideKey: string }[] = [
    { nameKey: 'fluct-inc', url: 'https://corp.fluct.jp', asideKey: 'fluct-inc-aside' },
    { nameKey: 'zucks-inc', url: 'https://zucks.co.jp', asideKey: 'zucks-inc-aside' },
    { nameKey: 'sepori-inc', url: 'https://www.septeni-original.co.jp', asideKey: 'sepori-inc-aside' },
    { nameKey: 'vm-inc', url: 'https://voyagemarketing.com', asideKey: 'vm-inc-aside' },
    { nameKey: 'seisa-kokusai', url: 'https://www.seisagroup.jp', asideKey: 'seisa-kokusai-aside' },
]

const Index = ({ t, i18n }) => (
    <>
        <Head>
            <title lang={i18n.language}>{t('title')}</title>
        </Head>
        <div id="locales">
            <span>Language: </span>
            <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value) }>
                {[publicRuntimeConfig.defaultLanguage, ...publicRuntimeConfig.otherLanguages].map((lng) => {
                    return <option value={lng}>{lng}</option>
                })}
            </select>
        </div>
        <h1>{t('heading')}</h1>
        <table id="details">
            <tbody>
                <tr>
                    <th>{t('label-for-company-legal-name')}</th>
                    <td>{t('company-legal-name')}</td>
                </tr>
                <tr>
                    <th>{t('label-for-company-number')}</th>
                    <td>
                        <a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8012803002172" target="_blank">8012803002172</a>
                        <a href={t('about-nta-company-number')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className="infomark"/></a>
                    </td>
                </tr>
                <tr>
                    <th>D-U-N-S® Number</th>
                    <td>
                        <a href="https://www.dnb.com/business-directory/company-profiles.kiganix_gk.f60e4dc6c2c6e86e360766f860bc0950.html" target="_blank">718232158</a>
                        <a href={t('about-duns-number')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className="infomark"/></a>
                    </td>
                </tr>
                <tr>
                    <th>{t('label-for-corporate-website')}</th>
                    <td>
                        <span>https://kiganix.co.jp</span>
                        <a href={t('about-organizational-jp-domain')} target="_blank"><FontAwesomeIcon icon={faQuestionCircle} className="infomark"/></a>
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
                    <th>{t('label-for-our-business')}</th>
                    <td>
                        <ul>
                            <li><a href="https://lapras.com/public/AQNWBZV" target="_blank">{t('entrusted-software-development')}</a></li>
                            <li><a href="https://lapras.com/public/AQNWBZV" target="_blank">{t('educational-business')}</a></li>
                            <li><a href="https://interspersedrecords.com" target="_blank">{t('music-publishing')}</a></li>
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
            {shuffle(clients).map((itr) => {
                return <>
                    <li>
                        <a href={itr.url} target="_blank">{t(itr.nameKey)}</a>
                        &nbsp;
                        <span>{t(itr.asideKey)}</span>
                    </li>
                </>
            })}
        </ul>
        <div id="github">
                <a href="https://github.com/kiganix/kiganix.co.jp" target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
        </div>
    </>
)

export default I18Next.withTranslation()(Index)