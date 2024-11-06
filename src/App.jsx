import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

 
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes]);

  const addRecipe = (recipe) => {
    const newRecipe = { ...recipe, id: Date.now() }; 
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  

  const updateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
    );
    setRecipeToEdit(null); 
  };



  return (
    <div className="container">
      <h1 className="my-4 text-center">Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} updateRecipe={updateRecipe} recipeToEdit={recipeToEdit} />
      <RecipeList
        recipes={recipes}
        setSelectedRecipe={setSelectedRecipe}
      
        setRecipeToEdit={setRecipeToEdit}
      />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
}

export default App;
