import React, { createContext, useState } from 'react'

export const recipe_context = createContext(null);

const RecipeContext = (props) => {
    // console.log(props);
    const [Recipes, setRecipes] = useState(() => {
        const savedRecipes = localStorage.getItem("recipe_list");
        return savedRecipes ? JSON.parse(savedRecipes) : []
    });
    // console.log(Recipes);
    
return (
    <recipe_context.Provider value={{ Recipes, setRecipes }}>
        {props.children}
    </recipe_context.Provider>
)
}

export default RecipeContext    