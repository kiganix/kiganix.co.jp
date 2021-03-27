import React from "react"
import css from './HistoryItem.module.css'

export type Props = React.PropsWithChildren<{
    heading: string,
}>

export function HistoryItem(props: Props) {
    return <tr className={css.item}>
        <th>{props.heading}</th>
        <td>{props.children}</td>
    </tr>
}

export function HistoryItemParent(props: React.PropsWithChildren<{}>) {
    return <table className={css.parent}>
        <tbody>
            {props.children}
        </tbody>
    </table>
}
