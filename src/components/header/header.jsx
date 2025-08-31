import Burger from '../../module/burger/burger';
import Logo from './logo/logo';
import styles from './header.module.css'
export default()=>{
    return(
        <>
            <header className={styles.header}>
                <Logo />
                <Burger />
            </header>
        </>
    )
}