import styles from './style/index.module.css'
import video from './../../assets/video.png'

export const Video = () => {
    return (
        <div className={styles.video}>
            <p className={styles.video__text}>проверенное <span>качество</span></p>
            <img src={video} alt="видео" className={styles.video__img} />
        </div>
    )
}