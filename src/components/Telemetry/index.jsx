import style from './style/index.module.css'
import tele from './../../assets/tele.png'

export const Telemetry = () => {
    return (
        <div className={style.telemetry}>
            <img src={tele} alt="телеметрия" className={style.telemetry__img} />
            <div className={style.telemetry__info}>
                <p className={style.telemetry__info__title}>оснащение системой <br /><span>телеметрии</span></p>
                <ul className={style.telemetry__info__ul}>
                    <li>BMS (Battery Management System) - система управления батареей с возможностью онлайн мониторинга со смартфона</li>
                    <li>Система доступа операторов к погрузчику</li>
                    <li>Развернутый отчет об эксплуатации техники</li>
                    <li>Оповещение о предстоящем ТО</li>
                    <li>Контроль учета рабочего времени</li>
                    <li>Геолокация погрузчика</li>
                    <li>Фиксация нарушений скоростных ограничений</li>
                </ul> 
            </div>
            {/* back */}
            <div className={style.back}></div>
        </div>
    )
}