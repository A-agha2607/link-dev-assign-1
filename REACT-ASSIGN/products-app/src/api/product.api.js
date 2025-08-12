export const BASEURL='https://fakestoreapi.com/products';
import React from 'react'
import axios from 'axios';

export async function fetchProducts(){
   const {data} =await axios.get(BASEURL);
   return data;
}

export async function addProducts(product){
    const {data}=await axios.post(BASEURL,{
        ...product
    },{
        headers:{
            "Content-Type":"application/json"
        }
    }
)
console.log(data)
return data;
}
export async function deleteProducts(id) {
    const {data}=await axios.delete(`${BASEURL}/${id}`)
    return data;
    
}
export async function editProducts(id,product){
    const {data}= await axios.put(`${BASEURL}/${id}`,{
        ...product
    },{
        headers:{
            "Content-Type":"application/json"
        }
    }
        
    )
    return data;
}