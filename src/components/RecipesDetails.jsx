import React from 'react'
import { useGetRecipeListQuery } from '../services/recipesApi';
import { useParams } from 'react-router-dom';

const RecipesDetails = () => {

  const idRecipe = useParams();
  const data = useGetRecipeListQuery();
  const recipeData = data?.data?.results;

  console.log(idRecipe);

  //Searching for the index of the object array by ID, which we have access to by the useParam hook.
  const index = recipeData?.findIndex(function(data,index){
    return data?.id === parseInt(idRecipe?.id);
  });

  //After the index search the data is fetched from the correct object for display.
  const recipeInstructions = recipeData?.[index]?.instructions;

  return (
    <>
      <div className='recipe-wrap'>
        {recipeInstructions?.map((recipe,index) => (
          <div className="recipe-details">
            <h className='step-title'>Step {`${index + 1}`}</h>
            <p>{`${recipe.display_text}`}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default RecipesDetails;