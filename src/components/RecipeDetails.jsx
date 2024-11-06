import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div className="my-4" >
        <h1>RecipeDetails</h1>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} height={300} width={300}/>
      <h5>Ingredients:</h5>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
