import Link from "next/link"
import css from './GlobalHeader.module.css'
import KiganixLogo from '../public/static/logo-square-symbolic-joined.svg'

type Props = {
}

export function GlobalHeader(props: Props) {
    return <header className={css.globalHeader}>
        <div className={css.globalHeaderInner}>
            <div className={css.flexFill}>
                <Link href="/">
                    <div className={css.logoContainer}>
                        <KiganixLogo className={css.logoImg}/>
                        <span className={css.logoText}>Kiganix, G.K.</span>
                    </div>
                </Link>
            </div>
            <nav className={css.nav}>
                <Link href="/about">会社概要</Link>
            </nav>
        </div>
    </header>
}
