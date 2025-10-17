import {useEffect, useState} from 'react';
import axios from "axios";

export const UseeffectCard = () =>  {
    const [apiData, setApiData] = useState({})
    // {
    //     "key":"value",
    //     "key": { "key": "value"},
    //     "key": ["Ram","Shyam"],
    //     "key": [
    //              {"key","value"},
    //              {"key","value"},
    //            ],
    // }

    // let a = 10;

    const callApi = async () =>{
        try {
            let response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Sirsa&appid=415a2abc28ab72927fc6937f21598b22")
            console.log(response.data)
            setApiData(response.data)
        } catch (error) {
            console.log("Somenting went wrong",error)
        }
    }

    useEffect(()=>{
        callApi()
    },[])

    //Useeffect accepts two params 
    // 1. a `function` to execute (or a task to do)
    // 2. a `Dependency Array`


  return (
    <div className='bg-green-50 p-10 border-green-600 border'>
        <h1 className='font-bold pb-4'>Weather Data {apiData.name}</h1>
        <div>
            <h1>Name : {apiData?.name || "N/A"}</h1>
            <h1>Name : {apiData?.base || "N/A"}</h1>

            <h1>Cloud : {apiData?.clouds?.all}</h1>
        </div>
    </div>
  )
}


//Component 2

const UseeffectCard2 = () => {
  return (
    <div className='bg-gray-50 p-10 border-gray-500 border'>UseeffectCard2</div>
  )
}

export default UseeffectCard2