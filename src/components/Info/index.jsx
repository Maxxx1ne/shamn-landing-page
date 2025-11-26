import style from './style/index.module.css'
import blackcar from './../../assets/black.png'
import whitecar from './../../assets/white.png'

export const Info = () => {
    return (
        <div className={style.info}>
            <p className={style.info__title}>эволюционные <span>технологии</span></p>
            <p className={style.info__mini}>Технологии электромобиля в вилочном погрузчике</p>
            <div className={style.info__block}>
                <img src={blackcar} alt="черный" className={style.info__block__img} />
                <img src={whitecar} alt="белый" className={style.info__block__img} />
            </div>
            {/* tooltip */}
            <div class={style.container}>
                <div className={style.container__text}>Степень защиты IP65</div>
            </div>
            <div class={style.containerTwo}>
                <div className={style.containerTwo__text}>Температура рабочей среды -40 до +40</div>
            </div>
            <div class={style.containerThree}>
                <div className={style.containerThree__text}>Корпус изготовлен из высокопрочной стали</div>
            </div>
            <div class={style.containerFour}>
                <div className={style.containerFour__text}>Уникальная система рекуперации энергии торможения</div>
            </div>
        </div>
    )
}
