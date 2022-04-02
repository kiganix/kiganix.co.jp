import Link from 'next/link'
import css from './GlobalFooter.module.css'
import { Logo } from './Logo'
import getConfig from 'next/config'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const { _, publicRuntimeConfig } = getConfig()

type Props = {
}

export function GlobalFooter({
}: Props) {
    const { i18n } = useTranslation()

    return <footer className={css.globalFooter}>
        <div className={css.globalFooterInner}>
            <div className={css.flexFill}>
                <Link href="/">
                    <Logo invert verticalMargin={false}>合同会社キガニックス</Logo>
                </Link>
            </div>
            <nav className={css.nav}>
                <a href="/locations">拠点</a>
                <a href="https://www.facebook.com/kiganix/shop" target="_blank">Merch</a>
                <a href="https://github.com/kiganix/kiganix.co.jp" target="_blank">GitHub</a>
            </nav>
            <nav className={css.nav}>
                {[publicRuntimeConfig.defaultLanguage, ...publicRuntimeConfig.otherLanguages].map((lng) => {
                    return <a key={lng} onClick={() => {
                        i18n.changeLanguage(lng)
                    }}>{lng}</a>
                })}
            </nav>
        </div>
    </footer>
}
