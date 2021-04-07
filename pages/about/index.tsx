import I18Next from '../../i18n'
import { TFunction, WithTranslation } from 'next-i18next'
import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { SectionHeader } from '../../components/about/SectionHeader'
import { HistoryItem, HistoryItemParent } from '../../components/about/HistoryItem'
import { OurStyleItem, OurStyleParent } from '../../components/about/OurStyle'
import css from './index.module.css'
import React from 'react'

type Props = WithTranslation & NextPageContext

function AboutKiganix() {
    return <Section>
        <SectionHeader text="Kiganixについて"/>
        <HeroImage
            src="https://kiganix.imgix.net/static/penguin.png?w=800&amp;auto=compress"/>
        合同会社キガニックスは、東京都昭島市を拠点とするテクノロジー企業です。<br/>
        ソフトウェア技術をレバレッジに効率化を推し進め、様々な関連事業を企画・展開しています。
    </Section>
}

function History() {
    return <Section>
        <SectionHeader text="沿革"/>
        <HistoryItemParent>
            <HistoryItem heading="2021年 3月">IP事業としてフィジカル商品の販売・管理を開始。</HistoryItem>
            <HistoryItem heading="1月">教育機関向け支援事業を消費者向けに拡大し、Kiganixの教育事業としてリブランディング。</HistoryItem>
            <HistoryItem heading="2020年 8月">meldgrooveとして日本国内向け音楽制作・出版・管理事業を開始。</HistoryItem>
            <HistoryItem heading="7月">
                IP事業としてねこのおぢさんをリリース、デジタル商品の販売を開始。<br/>
            </HistoryItem>
            <HistoryItem heading="2月">IP事業として新規IPの企画・制作を開始。</HistoryItem>
            <HistoryItem heading="2019年 12月">
                合同会社キガニックス設立。吉岡秀馬による全ての個人事業を継承。<br/>
                また、中小事業者向けのITコンサルティング事業を開始。
            </HistoryItem>
            <HistoryItem heading="10月">Refeeld (from Reliefcrafts.) をA&amp;Rに迎え、Interspersed Recordsとして国外向け音楽制作・出版・管理事業を開始。</HistoryItem>
            <HistoryItem heading="2017年 4月">教育機関向け支援事業を開始。</HistoryItem>
            <HistoryItem heading="3月">
                吉岡秀馬（創業者・現代表）による個人事業を開業。<br/>
                スタートアップ企業向けソフトウェア開発受託事業を開始。
            </HistoryItem>
        </HistoryItemParent>
    </Section>
}

function OurStyle() {
    return <Section>
        <SectionHeader text="事業概要"/>
        <div>
            Kiganixはソフトウェア開発受託事業により約8割の収益を上げており、そのほとんどは大手広告事業者から直接委託を受けています。<br/>
            各関連事業は本事業による収益の投資、およびソフトウェア技術による業務効率化により、第2の収益軸の創出を目指しインキュベーションを図っているものです。
        </div>
        <OurStyleParent>
            <OurStyleItem
                do="テクノロジーによる属人性排除と効率化"
                dont="労働集約を前提とする構造の採用・提案"/>
            <OurStyleItem
                do="誠実性を基本価値とする取引"
                dont="情報の非対称性を前提とする収益構造化"/>
            <OurStyleItem
                do="クリエイターカルチャーの支援・健全化・創出"
                dont="クリエイターカルチャーの排除"/>
            <OurStyleItem
                do="従業員・役員が直感的に価値を感じること"
                dont="従業員・役員が直感的に価値を感じないこと"/>
        </OurStyleParent>
    </Section>
}

function Section(props: React.PropsWithChildren<{}>) {
    return <div className={css.section}>{props.children}</div>
}

function HeroImage(props: {src: string}) {
    return <div
        className={css.heroImage}
        style={{
            backgroundImage: `url(${props.src})`,
        }}></div>
}

function About(props: Props) {
    return <>
        <Head>
            <title>Kiganixについて</title>
        </Head>
        <div className={css.container}>
            <AboutKiganix/>
            <OurStyle/>
            <History/>
        </div>
    </>
}

export default I18Next.withTranslation()(About)
