import css from './Section.module.css'

export function Section(props: React.PropsWithChildren<{}>) {
    return <div className={css.section}>{props.children}</div>
}
