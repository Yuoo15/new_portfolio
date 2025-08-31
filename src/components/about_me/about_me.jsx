import styles from './about.module.css'
import books from '../../assets/about.png'
import R_icon from '../../assets/React icon.png'
import python from '../../assets/python.png'
import figma from '../../assets/figma.webp'
import array from '../../assets/Array_or.png'
export default ()=>{
    return(
        <>
        <a id='about'></a>
            <div className={styles.about}>
                <h1 className={styles.h1}>Обо<br />мне</h1>
                <div className={styles.cont}>
                    <div className={styles.image}>
                        <img src={books} width={500} height={500}/>
                    </div>
                    <div className={styles.text}>
                        <span className={styles.popa}>
                            <p className={styles.p}>Мне 16 лет, я начинающий веб-разработчик. Владею HTML, CSS, JavaScript, Python, работаю с Git, GitHub, Vite, npm, использую SCSS и React для создания современных интерфейсов.<br /><br />Давайте начнем проект вместе!</p>
                        </span>
                        <h2 className={styles.h2}>Skils</h2>
                        <div className={styles.icons}>
                            <div><img src={R_icon} width={56} height={52} className={styles.R_icon}/><p className={styles.name}>React</p></div>
                            <div><img src={python} className={styles.icon}/><p className={styles.name}>Python</p></div>
                            <div><img src={figma} className={styles.figma}/><p className={styles.name}>Figma</p></div>
                        </div>
                </div>
                </div>
            </div>
        </>
    )
}