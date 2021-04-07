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
                <Link href="/">
                    <Logo>Kiganix, G.K.</Logo>
                </Link>
            </div>
            <nav className={css.nav}>
                <Link href="/about">{t('label-for-about')}</Link>
                <a href="https://www.notion.so/kiganix/88616ab67c394875941b5cb1ef438e00" target="_blank">{t('label-for-contact-us')}</a>
            </nav>
        </div>
    </header>
}
