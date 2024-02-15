import React from 'react'
import './Card.css'

const Card = ({cocktail}) => {
  return (
    <div className="card">
      <div className="cardNames">
        {cocktail.drinks.map((data, i) => {
        // console.log(data.strDrink);
          return (
            <div key={data.strDrink}>
              <div className="cardData">
                <span className="drinkName">{data.strDrink}</span>
              </div>
              <img src={data.strDrinkThumb} alt="" />
              {/* <span className="drinkStrInstructions">{data.strInstructions}</span> */}
              <div className="cardData">
                <p className="title">作り方：{data.strInstructions}</p>
              </div>
            </div>
      );
      })}
      </div>
  </div>
  )
}

export default Card