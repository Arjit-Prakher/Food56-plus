import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar font-semibold text-xl flex items-center justify-center py-5 relative mb-5'> 
            <div className='pill flex items-center justify-center gap-14 bg-black text-white w-fit px-10 py-2 rounded-full absolute'>

                <NavLink className={(e) => e.isActive ? "text-rose-400" : ""} to={'/'}>Home</NavLink>
                <NavLink className={(e) => e.isActive ? "text-rose-400" : ""} to={'/recipe'}>Recipes</NavLink>
                <NavLink className={(e) => e.isActive ? "text-rose-400" : ""} to={'/create-recipe'}>Create</NavLink>
            </div>
        </div>
    )
}

export default Navbar