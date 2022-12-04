import React from 'react';

const Card = ({recette}) => {
    return (
        <div className ='recette'>
            <h1>{recette.strMeal}</h1>
            <p>Origine : {recette.strArea}</p>
            <img src={recette.strMealThumb}></img>
            <p style={{overflow:'hidden',height:'160px'}}>{recette.strInstructions}</p>...
        </div>
    );
};

export default Card;