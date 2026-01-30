import React, { createContext, useState } from 'react'

export const recipe_context = createContext(null);

const RecipeContext = (props) => {
    // console.log(props);
    const [Recipes, setRecipes] = useState([{
        id: 1,
        title: "Something",
        ingredients: "asdf, asdf",
        instructions: "The quick brown fox jumps over a lazy dog."
    }]);
    // console.log(Recipes);
    
return (
    <recipe_context.Provider value={{ Recipes, setRecipes }}>
        {props.children}
    </recipe_context.Provider>
)
}

export default RecipeContext    