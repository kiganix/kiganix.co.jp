import I18Next from '../../i18n'
import { NextPageContext } from "next"
import { WithTranslation } from "next-i18next"
import { Section } from "../../components/about/Section"
import { SectionHeader } from "../../components/about/SectionHeader"
import Head from 'next/head'

type Props = NextPageContext & WithTranslation

function ServicesIndex(props: Props) {
    return <>
        <Head>
            <title>主要事業</title>
        </Head>
        <Section>
            <SectionHeader text="主要事業"/>
            Kiganixは創業時より高度な専門技術を主たる商材とし、お客様のビジネス成長をテクノロジーで支えるプロフェッショナルサービスを提供しています。
        </Section>
        <Section>
            <h1>ソフトウェア受託開発事業</h1>
            <>
                創業者である吉岡 秀馬の個人事業を継承し、フリーランスとしてSESに相当する受託開発事業を展開しています。<br/>
                主にスタートアップ企業を対象とし、新規事業開発において求められる高度なソフトウェアの設計・開発を得意としています。<br/>
                また事業の持続可能高める事を目的とし、利用しているオープンソースソフトウェアへの金銭的支援や、自社開発製品のオープンソース化を推進しています。
                <ul>
                    <li><a href="https://lapras.com/public/AQNWBZV" target="_blank">吉岡 秀馬 | LAPRAS Profile</a></li>
                    <li><a href="https://kiga.dev" target="_blank">kiga.dev</a></li>
                    <li><a href="https://nfcuid.kiganix.com" target="_blank">NFC UID Reader</a></li>
                    <li><a href="https://github.com/kiganix" target="_blank">GitHub (Kiganix)</a></li>
                    <li><a href="https://opencollective.com/kiganix" target="_blank">Open Collective (Kiganix)</a></li>
                </ul>
            </>
        </Section>
        <Section>
            <h1>教育事業</h1>
            <>
                創業者である吉岡 秀馬の個人事業を継承し、主に学校法人等の教育機関を対象としたセミナー事業を展開しています。<br/>
                現在はコンピュータープログラミング講習の他にも、インキュベーション領域における技術を流用し音響処理講習等も高等学校様より受託しています。
                <ul>
                    <li><a href="https://seminar.kiganix.com">Kiganixの教育事業</a></li>
                </ul>
            </>
        </Section>
    </>
}

export default I18Next.withTranslation()(ServicesIndex)
