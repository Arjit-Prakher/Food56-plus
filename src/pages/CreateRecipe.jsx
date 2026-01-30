import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { recipe_context } from "../context/RecipeContext";

const CreateRecipe = () => {
    const {Recipes, setRecipes} = useContext(recipe_context);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (newdata) => {
        newdata.id = nanoid();
        setRecipes([...Recipes, newdata])
        reset();
    };
    


    return (
        <>
            <h1 className="mt-10 mb-10 text-4xl text-fuchsia-300 text-center">Share your magic with others.</h1>
            <div className="form-div">

                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center">
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
                        <button className="px-4 py-2 rounded-2xl bg-sky-600 active:scale-95">Submit</button>
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

        </>
    )
}

export default CreateRecipe