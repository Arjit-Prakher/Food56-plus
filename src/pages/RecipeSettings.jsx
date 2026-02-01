import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipe_context } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeSettings = () => {

    const navigate = useNavigate();
    const { Recipes, setRecipes } = useContext(recipe_context);
    const params = useParams();

    // To display data in the form.
    const recipeToList = Recipes.find((recipe) => params.id == recipe.id);
    // console.log(recipeToList);

    const { register, handleSubmit } = useForm({
        values: recipeToList
    });
    const onUpdate = (newdata) => {
        // console.log(newdata);
        // Find and replace
        setRecipes(
            Recipes.map((recipe) => recipe.id == params.id ? newdata : recipe)
        )
        navigate('/recipe')

    };
    const deleteHandler= () => {
        if(confirm("Delete this recipe?")) {

            setRecipes(
                Recipes.filter((recipe) => recipe.id !== params.id)
            )
        }
        navigate('/recipe')
    }
    // console.log(Recipes);
    return (
        <div>
            <h1 className='mt-10 text-center text-5xl mb-10'>Need to change?</h1>
            
            <form onSubmit={handleSubmit(onUpdate)} className="flex items-center justify-center">
                <div className="left-side flex flex-col justify-center w-1/3 px-5 py-3">
                    <input
                        className="border rounded-2xl p-3 mb-4"
                        type="text"
                        placeholder="name"
                        {...register("title")}
                    />
                    <textarea
                        className="border rounded-2xl p-3 mb-4"
                        type="text"
                        placeholder="Ingredients"
                        {...register("ingredients")}
                    />
                    <textarea
                        className="border rounded-2xl p-3 mb-4 h-55"
                        type="text"
                        placeholder="Instructions"
                        {...register("instructions")}
                    />
                    <div className='buttons flex items-center justify-between'>

                    <button className="cursor-pointer px-4 py-2 rounded-2xl bg-sky-600 active:scale-95">Update</button>
                    <button onClick={deleteHandler} className="cursor-pointer px-4 py-2 rounded-2xl bg-rose-800 active:scale-95">Delete</button>
                    </div>
                    <button onClick={() => navigate('/recipe')} className="cursor-pointer mt-5 px-4 py-2 rounded-2xl bg-emerald-600 active:scale-95">Back</button>
                </div>
                <div className="right-side flex items-center justify-center flex-col w-1/2">
                    <input
                        className="border rounded-2xl p-3 mb-4 cursor-pointer text-center"
                        type="file"
                        placeholder="Image here"
                        {...register("image")}
                    />
                    <p>You can upload image of the recipe.</p>
                </div>

            </form>
        </div>
    )
}

export default RecipeSettings