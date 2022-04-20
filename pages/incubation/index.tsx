import I18Next from '../../i18n'
import { NextPageContext } from "next"
import { WithTranslation } from "next-i18next"
import { Section } from "../../components/about/Section"
import { SectionHeader } from "../../components/about/SectionHeader"
import Head from 'next/head'
import { buildTitle } from '../../utils'

type Props = NextPageContext & WithTranslation

function IncubationIndex(props: Props) {
    return <>
        <Head>
            <title lang={props.i18n.language}>{buildTitle(props.t, 'インキュベーション領域')}</title>
        </Head>
        <Section>
            <SectionHeader text="インキュベーション領域"/>
            Kiganixでは主要事業により培った技術を元に、様々な関連事業のインキュベーションを行っています。
        </Section>
        <Section>
            <h1>音楽制作・出版・管理事業</h1>
            <>
                創業者である吉岡 秀馬の個人事業を継承し、国内外のストリーミングサービスを対象とした音楽ソフト出版事業を営んでおります。
                <ul>
                    <li><a href="https://music.kiganix.com" target="_blank">Kiganix Music</a></li>
                    <li><a href="https://interspersedrecords.com" target="_blank">Interspersed Records</a></li>
                    <li><a href="https://meldgroove.com" target="_blank">meldgroove</a></li>
                </ul>
            </>
        </Section>
        <Section>
            <h1>IP事業</h1>
            <>
                インターネット上で活躍するクリエイターと連携し、成長サポートおよび自社IPのライツマネジメント事業を展開しております。
                <ul>
                    <li><a href="https://nekonoojisan.com" target="_blank">ねこのおぢさん</a></li>
                    <li><a href="https://store.kiganix.com" target="_blank">Kiganix Store</a></li>
                </ul>
            </>
        </Section>
        <Section>
            <h1>出版事業</h1>
            <>
                インターネット上で活躍するクリエイターと連携し、書籍の企画・制作・出版事業を展開しております。
                <ul>
                    <li><a href="https://kigapublishing.com" target="_blank">KIGA出版会</a></li>
                </ul>
            </>
        </Section>
    </>
}

export default I18Next.withTranslation()(IncubationIndex)
