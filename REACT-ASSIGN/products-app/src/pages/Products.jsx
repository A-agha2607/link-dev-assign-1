import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios';
import { addProducts, BASEURL, fetchProducts, deleteProducts, editProducts } from '../api/product.api';
import ProductList from '../components/ProductList';
import Header from '../components/Header';



export default function Products() {
    const [products, setProducts] = useState(null);
    const [edit, setEdit] = useState(null);

    async function getProducts() {
        try {
            const data = await fetchProducts();
            setProducts(data);
            console.log(data);

        } catch (error) {

        }
    }

    useEffect(() => {
        getProducts();


    }, []);

    async function handleProduct(data) {
        const imageFile = data.image;
        const imageURL = URL.createObjectURL(imageFile);
        const newData = {
            ...data,
            image: imageURL
        };

        try {
            if (edit) {
                console.log(newData);
                
                const res = await editProducts(edit.id, newData)
                const newProducts=products.filter((prod)=>prod.id!==res.id);
                setProducts([...newProducts, res])
                setEdit(null);
                
            } else {
                const res = await addProducts(newData)
                setProducts([...products, res])
            }





        } catch (error) {

        }
    }
    async function handleDelete(id) {
        try {
            const res = await deleteProducts(id)
            console.log(res);
            const newProducts = products.filter((prod) => prod.id !== id)
            setProducts(newProducts);
        } catch (error) {

        }

    }
    function handleEdit(product) {
        setEdit(product);

    }

    return (
        <>
            <Header />
            <ProductForm onSubmit={handleProduct} isEditing={edit} />
            <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
        </>
    )
}
