import React from 'react'

const Body = (props) => {
    
  return (
    
    <div className='body h-screen bg-linear-to-tl from-stone-800 to-violet-800 text-white px-5 py-5'>
        {props.children}
    </div>
  )
}

export default Body