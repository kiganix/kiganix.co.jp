import css from './HeroImage.module.css'

export function HeroImage(props: {src: string}) {
    return <div
        className={css.heroImage}
        style={{
            backgroundImage: `url(${props.src})`,
        }}></div>
}
