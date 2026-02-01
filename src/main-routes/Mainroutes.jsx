import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import CreateRecipe from '../pages/CreateRecipe'
import RecipeInstruction from '../pages/RecipeInstruction'
import RecipeSettings from '../pages/RecipeSettings'

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
            </Routes>
        </div>
    )
}

export default Mainroutes