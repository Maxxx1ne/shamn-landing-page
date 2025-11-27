import styles from './style/index.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer__mini}>© « Все права защищены</p>
            <a className={styles.footer__link} href="/">Политика конфиденциальности</a>
            <p className={styles.footer__tel}>Телефон: <span>8 800 555 80 80 </span></p>
            <p className={styles.footer__email}>E-mail: <span>index@gmail.com </span></p>
        </div>
    )
}