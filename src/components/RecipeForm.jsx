import React, { useState, useEffect } from 'react';

function RecipeForm({ addRecipe, updateRecipe, recipeToEdit }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');


  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients.join(', '));
      setImage(recipeToEdit.image);
    } else {
      setTitle('');
      setIngredients('');
      setImage('');
    }
  }, [recipeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      id: recipeToEdit ? recipeToEdit.id : Date.now().toString(),
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      image,
    };

    if (recipeToEdit) {
      updateRecipe(recipeData); 
    } else {
      addRecipe(recipeData); 
    }

   
    setTitle('');
    setIngredients('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="mb-3">
        <label className="form-label">Recipe Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingredients (comma-separated)</label>
        <input
          type="text"
          className="form-control"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {recipeToEdit ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
}

export default RecipeForm;
