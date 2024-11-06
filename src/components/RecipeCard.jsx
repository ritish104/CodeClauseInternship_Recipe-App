import React from 'react';

function RecipeCard({ recipe, setSelectedRecipe,setRecipeToEdit }) {
  return (
    <div className="col-md-4 mb-4 mt-5" style={{ maxWidth: '300px' }}>
      <div className="card" style={{ height: '100%' }}>
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <button className="btn btn-info me-2" onClick={() => setSelectedRecipe(recipe)}>
            View
          </button>
          <button className="btn btn-warning me-2" onClick={() => setRecipeToEdit(recipe)}>
            Edit
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
