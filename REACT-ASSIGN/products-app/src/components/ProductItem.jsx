import React from 'react'
import './product.css'
import { Button } from 'react-bootstrap'
export default function ProductItem({product,onDelete,onEdit}) {
  return (
    <div key={product.id} className='container d-flex flex-column crds align-items-center py-3'>
        <img src={product.image} className='' alt="" />
        <h1 className='fs-5 pt-4 text-left'>{product.title}</h1>
        <p className='text-body-teriatry pt-4 text-left'>
            {product.description}
        </p>
        <div className='line-design mt-auto'></div>
        <span className='fw-bold fs-6 mt-auto pb-3'> ${product.price}</span>
        
        <div className="d-flex flex-row  align-items-end">
                <Button className='me-3' variant='danger' onClick={()=>onDelete(product.id)}>delete</Button>
        <Button  variant='primary'onClick={()=>onEdit(product)}> edit</Button>
        </div>


    </div>
  )
}
