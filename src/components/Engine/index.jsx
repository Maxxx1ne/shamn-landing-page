import style from './style/index.module.css'
import engine from './../../assets/engine.png'

export const Engine = () => {
    return (
        <div className={style.engine}>
            <div className={style.engine__text}>
                <p className={style.engine__text__title}>двигатель и АКБ</p>
                <div className={style.engine__text__ul}>
                    <p className={style.engine__text__ul__item}> 1,5 часа составляет время зарядки</p>
                    <p className={style.engine__text__ul__item}>Однократная потребляемая мощность АКБ 15 кВт/ч <br /> (30% экономия затрат на электроэнергию)</p>
                    <p className={style.engine__text__ul__item}>Интеллектуальный контроль температуры</p>
                    <p className={style.engine__text__ul__item}>Синхронный двигатель с постоянными магнитами</p>
                    <p className={style.engine__text__ul__item}>Несколько режимов работы: ECO, STANDARD, POWER</p>
                </div>
            </div>
            <img src={engine} alt="двигатель" className={style.engine__img} />
            {/* back img */}
            <div className={style.back}></div>
        </div>        
    )
}