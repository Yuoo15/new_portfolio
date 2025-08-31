import styles from './footer.module.css'
import instagram from '../../assets/images.jfif'
import whatsapp from '../../assets/whatsapp.png'
export default()=>{
    return(
        <>
        <a id='cont'></a>
        <footer>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>У вас есть<br /> идеи?</h1>
                    <p className={styles.p}>давайте построим его<br /> всместе!</p>
                    <a href='mailto:ramazankantaev751@gmail.com' className={styles.a}>ramazankantaev751@gmail.com</a>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/ramazz.mp4?igsh=eDk2eGpiZWo5cmM2" target="_blank" rel="noopener noreferrer" className={styles.social}>
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://github.com/Yuoo15" target="_blank" rel="noopener noreferrer" className={styles.social}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.426 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.192 22 16.438 22 12.012 22 6.484 17.523 2 12 2Z" fill="#181717"/></svg>
                            </a>
                            <a href="https://wa.me/77006540387" target="_blank" rel="noopener noreferrer" className={styles.social}>
                                <img src={whatsapp} alt="WhatsApp" width={30} height={30}/>
                            </a>
                        </div>
                </div>
                <div className={styles.bg}>
                </div>
            </div>
            
        </footer>
        </>
    )
}