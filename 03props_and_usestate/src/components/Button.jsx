import React from 'react'

function Button(props) {
  return (
    <div className={`bg-black w-fit px-4 py-4 h-fit`}>
        <p className='text-white'>{props.children}</p>
    </div>
  )
}

export default Button