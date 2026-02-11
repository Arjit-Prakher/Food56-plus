import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import CreateRecipe from '../pages/CreateRecipe'
import RecipeInstruction from '../pages/RecipeInstruction'
import RecipeSettings from '../pages/RecipeSettings'
import LikedRecipes from '../pages/LikedRecipes'

const Mainroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipe' element={<Recipe />}>
                    <Route path='/recipe/instruction/:id' element={<RecipeInstruction/>} />
                </Route>
                <Route path='/recipe/settings/:id' element={<RecipeSettings />} />
                <Route path='/create-recipe' element={<CreateRecipe />} />
                <Route path='/liked-recipes' element={<LikedRecipes />} />
            </Routes>
        </div>
    )
}

export default Mainroutes