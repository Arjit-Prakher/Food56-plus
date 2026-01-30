import { useNavigate } from 'react-router-dom';

const RecipeCard = (props) => {
    // console.log("This is props", props);

    const navigate = useNavigate();
    const navigateHandler = (recipeDetails) => {
         navigate(`/recipe/instruction/${recipeDetails.id}`);
    }
    const {id, title, ingredients, instructions} = props.recipeDetails;
    
  return (
    <div className='card flex items-center justify-center flex-col border border-amber-100 rounded-2xl px-5 py-5'>
        <img className='h-60 rounded-2xl' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="display image" />
        <h3>{title}</h3>
        <button onClick={() => navigateHandler(props.recipeDetails)} className='px-5 py-3 bg-violet-500 rounded-2xl mt-6 cursor-pointer active:scale-95'>Details</button>
    </div>
  )
}

export default RecipeCard   
