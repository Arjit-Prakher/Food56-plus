import React, { useContext } from 'react'
import RecipeCard from "../components/Cards/RecipeCard"
import { recipe_context } from '../context/RecipeContext'

const LikedRecipes = () => {
    const { Recipes } = useContext(recipe_context);
    const extractFavourties = Recipes.filter((recipe) => recipe.isFavourite === true);
    const renderFavRecipes = extractFavourties.map((recipe) => (
        <RecipeCard key={recipe.id} recipeDetails={recipe} />
    ))

    return (
        <>
        
        <h1 className='text-center font-extrabold text-4xl mb-10 mt-10'>Your Favourites</h1 >
        
            <div className='recipes flex items-center gap-3.5 flex-wrap'>
                {renderFavRecipes.length > 0 ? renderFavRecipes: (<p>No Favourites yet..</p>)}
            </div>
        </>
    )
}

export default LikedRecipes