import styles from './button_black.module.css'
export default(props)=>{
    return(
        <>
            <button className={styles.button}>{props.text}</button>
        </>
    )
}