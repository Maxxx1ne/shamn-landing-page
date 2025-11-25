import styles from './style/index.module.css'
import logo from './../../assets/logo.jpg'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="лого" className={styles.header__img} />
            <div className={styles.header__block}>
            <p className={styles.header__block__phone}>8 800 555 80 80</p>
                <button className={styles.header__block__button}>Заказать звонок</button>
            </div>
        </div>
    )
}