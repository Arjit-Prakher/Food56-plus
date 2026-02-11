import { useContext } from "react";
import RecipeCard from "../components/Cards/RecipeCard"
import { Outlet } from 'react-router-dom';
import { recipe_context } from "../context/RecipeContext";

const Recipe = () => {

    const { Recipes } = useContext(recipe_context);
    const renderRecipes = Recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeDetails={recipe}/>
    ))

    
    return (
        <>
            <h1 className='text-center font-extrabold text-4xl mb-10 mt-10'>Explore the magic around you!</h1>
            <div>
                <Outlet />
            </div>
            <div className='recipes flex items-center gap-3.5 flex-wrap'>
                {Recipes.length > 0 ? renderRecipes: "No recipes yet..."}
            </div>
        </>
    )
}

export default Recipe