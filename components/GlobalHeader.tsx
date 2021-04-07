import Link from "next/link"
import css from './GlobalHeader.module.css'
import { Logo } from "./Logo"
import { useTranslation } from 'react-i18next'

type Props = {
}

export function GlobalHeader(props: Props) {
    const { t } = useTranslation()

    return <header className={css.globalHeader}>
        <div className={css.globalHeaderInner}>
            <div className={css.flexFill}>
                <Logo>Kiganix, G.K.</Logo>
            </div>
            <nav className={css.nav}>
                <Link href="/about">{t('label-for-about')}</Link>
                <Link href="/services">{t('label-for-our-business')}</Link>
                <Link href="/incubation">インキュベーション領域</Link>
                <a href="https://www.notion.so/kiganix/88616ab67c394875941b5cb1ef438e00" target="_blank">{t('label-for-contact-us')}</a>
            </nav>
        </div>
    </header>
}
