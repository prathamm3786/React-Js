import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'

const Todo = () => {
    const [api , setApi ] = useState([]);
    const getRecord = async() => {
        try{
            let{data} = await axios.get(`https://dummyjson.com/products`)
            setApi(data.products)
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
    useEffect(()=> {
        getRecord()
    },[])
  return (
    <div>
      <h2 align="center">Api calling with Axios method</h2>
      <div className="main-card">
        {api.map((val)=>{
            const {id , title , description , category , price , rating} = val;
            return(
                <div className="card" key={id}>
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                    <p className='category'>Category :- {category}</p>
                    <div className="price">
                        <span className='pro-price'> 
                            ${price}
                        </span>
                        <span className='pro-rating'> 
                            ${rating}
                        </span>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Todo
