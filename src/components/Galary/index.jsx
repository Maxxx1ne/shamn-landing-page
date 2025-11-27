import { useState } from 'react';
import styles from './style/index.module.css'
import right from './../../assets/first.png'
import center from './../../assets/center.png'
import left from './../../assets/second.png'

export const Galary = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const images = [right, right, right, center, left, left, left]
    
    return (
        <>
            <p className={styles.galary__title}>фотогалерея</p>
            <div className={styles.galary}>
                <div className={styles.galary__group}>
                    {images.map((src, index) => (
                        <img 
                            key={index} 
                            src={src} 
                            alt="" 
                            className={styles.galary__group__img}
                            onClick={() => openModal(src)}
                        />
                    ))}
                </div>
                <div className={styles.galary__group}>
                    {images.map((src, index) => (
                        <img 
                            key={index + images.length} 
                            src={src} 
                            alt="" 
                            className={styles.galary__group__img}
                            onClick={() => openModal(src)}
                        />
                    ))}
                </div>
            </div>
            {/* Modal */}
            <div className={`${styles.modal} ${selectedImage ? styles.open : ''}`} onClick={closeModal}>
                <button className={styles.modal__close} onClick={closeModal}>×</button>
                <img 
                    src={selectedImage} 
                    alt="" 
                    className={styles.modal__content}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </>
    )
}