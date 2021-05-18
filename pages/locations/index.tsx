import I18Next from '../../i18n'
import { TFunction, WithTranslation } from 'next-i18next'
import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { SectionHeader } from '../../components/about/SectionHeader'
import { Section } from '../../components/about/Section'
import { HistoryItem, HistoryItemParent } from '../../components/about/HistoryItem'
import { OurStyleItem, OurStyleParent } from '../../components/about/OurStyle'
import React from 'react'

function Location(props: React.PropsWithChildren<{
    name: string,
    subName?: string,
    address: React.ReactNode,
    imageUrl: URL,
}>) {
    return <Section>
        <div style={{
            backgroundImage: `url(${props.imageUrl.toString()})`,
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            minHeight: '250px',
            paddingTop: '1.5em',
            paddingBottom: '1.5em',
        }}>
            <div style={{
                marginLeft: '280px',
                backgroundColor: '#fff',
                paddingTop: '1.5em',
                paddingLeft: '1.5em',
                paddingBottom: '1.5em',
            }}>
                <h1 style={{ lineHeight: 1.1, margin: 0, }}>
                    <span style={{ marginRight: '0.3em', }}>{props.name}</span>
                    {props.subName ? <span style={{ color: '#bbb' }}>{props.subName}</span> : ''}
                </h1>
                <div style={{ marginTop: '0.5em' }}>
                    <div>{props.address}</div>
                    <div style={{ marginTop: '1.5em' }}>{props.children}</div>
                </div>
            </div>
        </div>
    </Section>
}

type Props = WithTranslation & NextPageContext

function Locations(props: Props) {
    return <>
        <Head>
            <title>拠点</title>
        </Head>
        <Location
            name="合同会社キガニックス 中神駅前第1営業所"
            imageUrl={new URL('https://kiganix.imgix.net/static/penguin.png?w=800&amp;auto=compress')}
            address={<a href="https://goo.gl/maps/6GyZzULKTXD38Qoa6" target="_blank">〒196-0025 東京都昭島市朝日町1-11-5 山内ビル 3-1</a>}>
            在宅勤務につき、従業員不在の場合があります。ご訪問の際は事前に弊社までご相談ください。
        </Location>
        <Location
            name="合同会社キガニックス"
            subName="本社"
            imageUrl={new URL('https://kiganix.imgix.net/static/penguin.png?w=800&amp;auto=compress')}
            address={<a href="https://g.page/Kiganix" target="_blank">〒196-0001 東京都昭島市美堀町5丁目1番17号</a>}>
            本店所在地はこちらになります。ご訪問は受け付けておりません。
        </Location>
    </>
}

export default I18Next.withTranslation()(Locations)
