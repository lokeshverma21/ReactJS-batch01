import React from 'react'

function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between'>
            <div>Logo.</div>
            <div>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar