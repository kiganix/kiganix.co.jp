import css from './SectionHeader.module.css'

export function SectionHeader(props: { text: string }) {
    return <div className={css.sectionHeader}>
        <span>{props.text}</span>
        <h1>{props.text}</h1>
    </div>
}
