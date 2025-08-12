import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductSchema } from '../schema/productSchema';


export default function ProductForm({onSubmit,isEditing}) {
    const { register, handleSubmit, formState: { errors },reset} = useForm({ resolver: zodResolver(ProductSchema) });

useEffect(()=>{
    if(!isEditing){
        reset({title:'',description:'',price:'',image:'',category:''});
    }
    else{
        reset(isEditing);
    }



},[reset,isEditing])

    return (
        <div className='container text-left'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 text-left" controlId="">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder=""  {...register('title')} />
                    <p className='text-danger'> {errors.title?.message}</p>

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="number" step='any' placeholder="" {...register('price', { valueAsNumber: true })} />
                    <p className="text-danger"> {errors.price?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>category</Form.Label>
                    <Form.Control type="text" placeholder="" {...register('category')} />
                   <p className="text-danger"> {errors.category?.message}</p>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>image file here</Form.Label>
                    <Form.Control type="file" accept='image/*' {...register('image')} />
                    <p className="text-danger">{errors.image?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>description</Form.Label>
                    <Form.Control as="textarea" rows={3} {...register('description')} />
                   <p className="text-danger"> {errors.description?.message}</p>
                </Form.Group>
                <Button variant={isEditing? 'warning':'primary'} type="submit">
                    {isEditing?'update':'submit'}
                </Button>
            </Form>
        </div>


    )
}
