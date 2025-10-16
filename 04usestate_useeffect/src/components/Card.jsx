import {useState} from 'react'

function Card() {

    const [count, setCount] = useState(0)


    const increment = () =>{
        setCount(count + 1)
    }
    
    const decrease = () =>{
        setCount(count - 1)
    }
    


  return (
    <div className='border flex flex-col items-center justify-center p-10'>
        <h1>Count : {count}</h1>

        <div className='flex items-center justify-center gap-6 mt-10'>
            <button onClick={increment} className='bg-black px-10 rounded-md text-white p-2 '>+</button>
            <button onClick={decrease} className='bg-black px-10 rounded-md text-white text- p-2 '>-</button>
        </div>
    </div>
  )
}

export default Card