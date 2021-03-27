import React from "react";
import css from './OurStyle.module.css'

export function OurStyleParent(props: React.PropsWithChildren<{}>) {
    return <table className={css.parent}>
        <thead>
            <th>していること</th>
            <th>していないこと</th>
        </thead>
        <tbody>{props.children}</tbody>
    </table>
}

export type Props = {
    do: React.ReactNode,
    dont: React.ReactNode,
}

export function OurStyleItem(props: Props) {
    return <tr>
        <td>{props.do}</td>
        <td>{props.dont}</td>
    </tr>
}
