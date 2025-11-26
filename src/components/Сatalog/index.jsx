import { Card } from './Card/index.jsx'
import styles from './style/index.module.css'

import card1 from './../../assets/cardlist.png'
import card2 from './../../assets/cardlist2.png'
import card3 from './../../assets/cardlist3.png'
import card4 from  './../../assets/cardlist4.png'
import card5 from  './../../assets/cardlist5.png'
import card6 from  './../../assets/cardlist6.png'
import book from './../../assets/book.png'

export const Catalog = () => {
  const cardsData = [
    {
      id: 1,
      image: card1,
      title: "CPD 20",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 2,
      image: card2,
      title: "CPD 25",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 3,
      image: card3,
      title: "CPD 30",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 4,
      image: card4,
      title: "CPD 35",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 5,
      image: card5,
      title: "CPD 40 MINI",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 6,
      image: card5,
      title: "CPD 45",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 7,
      image: card5,
      title: "CPD 50",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 8,
      image: card4,
      title: "CPD 55",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
    {
      id: 9,
      image: card6,
      title: "CPD 60",
      description: "Тип двигателя: Электрический Грузоподъемность: 1 т",
      hight: "Высота подъема: 3-6 м",
      info: "Подробные характеристики"
    },
  ]

  return (
    <div className={styles.catalog}>
      <p className={styles.catalog__title}>каталог <span>погрузчиков</span></p>
      <div className={styles.catalog__grid}>
        {cardsData.slice(0, 8).map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            hight={card.hight}
            info={card.info}
          />
        ))}
        <Card
          key={cardsData[8].id}
          image={cardsData[8].image}
          title={cardsData[8].title}
          description={cardsData[8].description}
          hight={cardsData[8].hight}
          info={cardsData[8].info}
        />
        <div className={styles.catalog__block}>
          <img src={book} alt="" className="catalog__block__img" />
          <div className="catalog__block__info">
            <p className={styles.catalog__block__info__text}>Интересует дизельный <br /> или газобензиновый погрузчик?</p>
            <button className={styles.catalog__block__info__button}>Получить прайс-лист</button>
          </div>
        </div>
      </div>
    </div>
  )
}