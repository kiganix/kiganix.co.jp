import React from 'react'
import KiganixLogo from '../public/static/logo-square-symbolic-joined.svg'
import css from './Logo.module.css'

type Props = {
    invert?: boolean
    verticalMargin?: boolean,
}

export function Logo({
    children,
    invert = false,
    verticalMargin = true,
}: React.PropsWithChildren<Props>) {
    return <div className={css.logoContainer}>
        <KiganixLogo className={[
            css.logoImg,
            invert ? css.logoImgDark : css.logoImgLight,
            verticalMargin ? css.logoImgVerticalMargin : undefined,
        ].filter(itr => itr !== undefined).join(' ')}/>
        <span className={css.logoText}>{children}</span>
    </div>
}
