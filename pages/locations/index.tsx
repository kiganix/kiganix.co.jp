import I18Next from '../../i18n'
import { TFunction, WithTranslation } from 'next-i18next'
import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { SectionHeader } from '../../components/about/SectionHeader'
import { Section } from '../../components/about/Section'
import { HistoryItem, HistoryItemParent } from '../../components/about/HistoryItem'
import { OurStyleItem, OurStyleParent } from '../../components/about/OurStyle'
import React from 'react'
import css from './index.module.css'
import { buildTitle } from '../../utils'

function Location(props: React.PropsWithChildren<{
    name: string,
    subName?: string,
    address: React.ReactNode,
    imageUrl: URL,
    links: React.ReactNode[],
}>) {
    return <Section>
        <div className={css.item}>
            <div className={css.background} style={{
                backgroundImage: `url(${props.imageUrl.toString()})`,
            }}></div>
            <div className={css.content}>
                <h1 style={{ lineHeight: 1.1, margin: 0, }}>
                    <span style={{ marginRight: '0.3em', }}>{props.name}</span>
                    {props.subName ? <span style={{ color: '#bbb' }}>{props.subName}</span> : ''}
                </h1>
                <div style={{ marginTop: '0.5em' }}>
                    <div>{props.address}</div>
                    <div style={{ marginTop: '1.5em' }}>{props.children}</div>
                </div>
                {props.links.length > 0 ? <div className={css.externalLinks}>{
                    props.links
                }</div> : <></>}
            </div>
        </div>
    </Section>
}

type Props = WithTranslation & NextPageContext

function Locations(props: Props) {
    const hqGmapsUrl = 'https://g.page/Kiganix'
    const nakagamiGmapsUrl = 'https://goo.gl/maps/6GyZzULKTXD38Qoa6'

    return <>
        <Head>
            <title lang={props.i18n.language}>{buildTitle(props.t, '拠点')}</title>
        </Head>
        <Location
            name="キガニックス中神駅前第1営業所"
            imageUrl={new URL('https://kiganix.imgix.net/static/penguin.png?w=800&amp;auto=compress')}
            address={<a href={nakagamiGmapsUrl} target="_blank">〒196-0025 東京都昭島市朝日町1-11-5 山内ビル 3-1</a>}
            links={[
                <a target="_blank" href={nakagamiGmapsUrl}>🗺️ Google Maps</a>,
                <a target="_blank" href="https://www.amazon.co.jp/hz/wishlist/genericItemsPage/15ZEPEPZQV1LJ?type=wishlist&amp;sort=priority&amp;viewType=list">🌟 ほしいものリスト</a>
            ]}>
            在宅勤務につき、従業員不在の場合があります。ご訪問の際は事前に弊社までご相談ください。
        </Location>
        <Location
            name="合同会社キガニックス"
            subName="本社"
            imageUrl={new URL('https://kiganix.imgix.net/static/nakagami1st.jpg?w=800&amp;auto=compress')}
            address={<a href={hqGmapsUrl} target="_blank">〒196-0001 東京都昭島市美堀町5丁目1番17号</a>}
            links={[]}>
            本店所在地はこちらになります。ご訪問は受け付けておりません。
        </Location>
    </>
}

export default I18Next.withTranslation()(Locations)
