import styles from './button.module.css'

export default (props) => {
    const { text, color } = props

    return (
        <button
            className={styles.button}
            style={{ backgroundColor: color }} 
        >
            {text}
        </button>
    )
}