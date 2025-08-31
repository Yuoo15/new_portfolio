import { useState } from 'react'
import styles from './burger.module.css'
export default()=>{
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div>
        <div onClick={()=>{setOpen(!isOpen)}} className={`${styles.burger} ${isOpen ? styles.open : ''}`}>
            <span className={styles.line}> </span>
            <span className={styles.line}> </span>
            <span className={styles.li}> </span>
        </div>
        <nav className={`${styles.menu} ${isOpen ? styles.menu__active : ''}`}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}><a href='#projects' className={styles.a}>Проекты</a></li>
                <li className={styles.menu__item}><a href='#about' className={styles.a}>Обо мне</a></li>
                <li className={styles.menu__item}><a href='#cont' className={styles.a}>Контакты</a></li>
            </ul>
        </nav>
        </div>
        </>
    )
}