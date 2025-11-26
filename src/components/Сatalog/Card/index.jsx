import styles from './style/index.module.css'

export const Card = ({ image, title, description, hight, info }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__content}>
        <p className={styles.card__content__title}>{title}</p>
        <p className={styles.card__content__description}>{description}</p>
        <div className={styles.card__content__hight}>{hight}</div>
        <button className={styles.card__content__button}>Получить предложение</button>
        <div className={styles.card__content__info}>{info}</div>
      </div>
    </div>
  )
}