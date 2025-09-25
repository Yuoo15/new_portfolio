import styles from './splash.module.css'
import Header from '../header/header'
import Array from '../../assets/array.png'
import Button_black from '../../module/Buttons/button_black/button_black'
import image from '../../assets/logo.png'
export default()=>{
    return(
        <>
        <div className={styles.splash}>
            <Header />
            <div className={styles.card}>
                <div className={styles.card_content}>
                    <img src={image} className={styles.image} width={100} height={100}/>
                    <div className={styles.text}>
                        <p className={styles.p}>Привет, я Рамазан 🤙</p>
                        <h1 className={styles.h1}>Я развиваю <span className={styles.line}>идеи</span> и помогаю строить лучший мир с помощью программного обеспечения</h1>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <a href='#cont'><Button_black text='Контакты'/></a>
                    <div className={styles.link}><a href='' className={styles.a}>Кнопка недоступна</a><img src={Array}/></div>
                </div>
            </div>
        </div>
        </>
    )
}