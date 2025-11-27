import style from './style/index.module.css'

export const Form = () => {
    return(
        <div className={style.form}>
            <p className={style.form__title}>связаться с нами</p>
            <p className={style.form__mini}>Оставьте заявку – и наш менеджер свяжется с вами, узнает ваши потребности и предложит идеальный погрузчик под ваши задачи</p>
            <div className={style.form__block}>
                <input  className={style.form__block__text} type="text" placeholder='Имя'/>
                <input  className={style.form__block__text} type="text" placeholder='Телефон'/>
            </div>
            <input type="text" className={style.form__coment} placeholder='Коментарии' />
            <div className={style.form__footer}>
                <button className={style.form__footer__button}>Отправить заявку</button>
                <p className={style.form__footer__link}>Нажимая кнопку «Отправить заявку», вы <br/> соглашаетесь с Политикой конфиденциальности</p>
            </div>
            <p className={style.form__footer__phone}>Или позвоните по телефону: <span>8 800 555 80 80</span></p>
        </div>
    )
}