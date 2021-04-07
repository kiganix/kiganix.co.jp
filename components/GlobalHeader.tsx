import Link from "next/link"
import css from './GlobalHeader.module.css'
import { Logo } from "./Logo"

type Props = {
}

export function GlobalHeader(props: Props) {
    return <header className={css.globalHeader}>
        <div className={css.globalHeaderInner}>
            <div className={css.flexFill}>
                <Link href="/">
                    <Logo>Kiganix, G.K.</Logo>
                </Link>
            </div>
            <nav className={css.nav}>
                <Link href="/about">会社概要</Link>
            </nav>
        </div>
    </header>
}
