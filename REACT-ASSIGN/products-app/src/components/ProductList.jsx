import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({products,onDelete,onEdit}) {
  return (
    <section className="py-5">
        <div className="container">
            <div className="row ">
                {products&&products.map((prod)=>(
                    <div key={prod.id} className="col-lg-3 col-md-6 col-sm-12 pb-5">
                        <ProductItem product={prod} onDelete={onDelete} onEdit={onEdit}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
