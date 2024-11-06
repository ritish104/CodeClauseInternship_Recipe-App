import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, setSelectedRecipe, setRecipeToEdit }) {
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          setSelectedRecipe={setSelectedRecipe}
       
          setRecipeToEdit={setRecipeToEdit}
        />
      ))}
    </div>
  );
}

export default RecipeList;
