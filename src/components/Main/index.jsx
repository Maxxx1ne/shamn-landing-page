import style from './style/index.module.css'
import phone from './../../assets/phone.svg'
import robot from './../../assets/car.png'

export const Main = () => {
    return (
        <div className={style.main}>
            <p className={style.main__text}>электромобильный <br /> вилочный погрузчик <br /> <span>нового поколения SHANN</span></p>
            <p className={style.main__miniInfo}>Оставьте заявку и получите консультацию специалиста</p>
            <img src={robot} alt="робот" className={style.main__img} />
            <div className={style.main__block}>
                <a href="#registration-modal" className={style.main__block__button}>Получить предложение</a>
                <p className={style.main__block__link}><img src={phone} alt="телефон" /> Перезвоним в течении дня для консультации</p>
            </div>
            {/* Modal */}
            <div id="registration-modal" className={style.modal}>
                <div className={style.modal__content}>
                    <a href="/" className={style.modal__content__close}>&times;</a>
                    <form className={style.modal__content__form}>
                        <p className={style.modal__content__form__title}>Оставить заявку на консультацию</p>
                        <p className={style.modal__content__form__mini}>Оставьте заявку – и наш менеджер свяжется с вами, узнает ваши потребности и предложит идеальный погрузчик под ваши задачи.</p>
                        <div className={style.modal__content__form__item}>
                            <input 
                                type="text" 
                                className={style.input} 
                                placeholder="Имя" 
                                required 
                            />
                        </div>
                        <div className={style.modal__content__form__item}>
                            <input 
                                type="tel" 
                                className={style.input} 
                                placeholder="+7 (XXX) XXX-XX-XX" 
                                required 
                            />
                        </div>
                        <div className={style.modal__content__form__item}>
                            <input 
                                type="email" 
                                className={style.input} 
                                placeholder="E-mail"
                                required 
                            />
                        </div>
                        <button className={style.modal__content__form__button}>Отправить</button>
                        <p className={style.modal__content__form__police}>Нажимая кнопку «Отправить», вы соглашаетесь с <a href="/" style={{color: '#009BFF'}}>Политикой конфиденциальности</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}