import styles from './logo.module.css'
export default()=>{
    return(
        <>
            <span className={styles.container}>
                <div>
                    <span className={styles.circle}>.</span>
                    <span className={styles.circle}>.</span>
                    <span className={styles.flash}>/</span>
                </div>
                <p className={styles.text}>Ramazan</p>
            </span>
        </>
    )
}