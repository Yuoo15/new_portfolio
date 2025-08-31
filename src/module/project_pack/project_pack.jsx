import Button from '../Buttons/Button_skill/Button'
import styles from './project_pack.module.css'
import git from '../../assets/github.png'
import site from '../../assets/site.png'

export default (props) => {
    const { text, image, src, skils, gitt } = { ...props }

    return (
        <div className={styles.content}>
            <h1 className={styles.h1}>{text}</h1>

            <div className={styles.skils}>
                {skils && skils.map(item => (
                    <div key={item.id}>
                        <Button text={item.skil} color={item.color}/>
                    </div>
                ))}
            </div>

            <div className={styles.image}>
                <img src={image} height={204} />
            </div>

            <span className={styles.buttons}>
                <span className={styles.l}>
                    <a href={gitt} className={styles.link} target="_blank" rel="noopener noreferrer">Github </a>
                    <img src={git} />
                </span>
                <span className={styles.l}>
                    <a href={src} className={styles.link} target="_blank" rel="noopener noreferrer">Visit</a>
                    <img src={site} />
                </span>
            </span>
        </div>
    )
}
