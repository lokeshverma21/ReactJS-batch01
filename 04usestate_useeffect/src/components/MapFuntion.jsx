import React from 'react'

function MapFuntion() {
    const arr = ["Ram","shyam","Raman"]
  return (
    <div>

        {arr.map((i)=>(
            <h1>{i}</h1>
        ))}

    </div>
  )
}

export default MapFuntion