import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { recipe_context } from '../context/RecipeContext';

const RecipeInstruction = () => {
    const navigate = useNavigate();
    const { Recipes } = useContext(recipe_context);
    const params = useParams();

    const recipe = Recipes.find((recipe) => params.id == recipe.id);

    return (
        <div key={recipe.id} className='instruction-window bg-[#180b6bb9] backdrop-blur-2xl px-10 py-10 rounded-2xl border-[#6e58fd] border-2 drop-shadow-2xl  w-[80%] h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <h1 className='text-center font-bold text-5xl mb-10 capitalize'>{recipe.title}</h1>
            <p className='mb-5'><span className='font-bold text-xl'>Ingredients: </span>{recipe.ingredients}</p>
            <p><span className='font-bold text-xl'>Start by: </span>{recipe.instructions}</p>


            <div className='buttons absolute flex items-center justify-between bottom-10 w-[90%]'>
                <button onClick={() => navigate('/recipe')} className='px-5 py-3 bg-violet-500 rounded-2xl mt-6 cursor-pointer active:scale-95'>Close</button>

                <div className='extra flex items-center gap-3 justify-between'>
                    <button className='cursor-pointer text-xl font-thin hover:text-rose-400'>Like</button>
                    <button className='cursor-pointer text-xl font-thin hover:text-rose-400'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeInstruction