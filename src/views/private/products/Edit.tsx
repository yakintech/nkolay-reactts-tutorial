import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../network/axiosInstance'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


type ProductFormInputs = {
    name: string,
    unitPrice: number,
    unitsInStock: number,
}

//create schema with yup
const schema = yup.object().shape({
    name: yup.string().required("Ad alanı boş geçilemez"),
    unitPrice: yup.number().required().positive("Lütfen pozitif bir sayı giriniz").integer().max(1000,"1000 den büyük değer giremezsiniz"),
    unitsInStock: yup.number().required()
})

function Edit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm<ProductFormInputs>({
        resolver: yupResolver(schema)
    })

    useEffect(() => {

        axiosInstance.get(`products/${id}`)
            .then(res => {
                setValue('name', res.data.name)
                setValue('unitPrice', res.data.unitPrice)
                setValue('unitsInStock', res.data.unitsInStock)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [])



    const updateProduct = (data: ProductFormInputs) => {
            
            axiosInstance.put(`products/${id}`, data)
                .then(res => {
                    navigate('/products')
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }

    return (<>
        <form onSubmit={handleSubmit(updateProduct)}>
            <div>
                <label>Name</label>
                <input {...register('name', { required: true })} />
                <p style={{color:'red'}}>{errors.name?.message}</p>
            </div>
            <div>
                <label>Unit Price</label>
                <input {...register('unitPrice', { required: true })} />
                <p style={{color:'red'}}>{errors.unitPrice?.message}</p>
            </div>
            <div>
                <label>Units In Stock</label>
                <input {...register('unitsInStock')} />
                <p style={{color:'red'}}>{errors.unitsInStock?.message}</p>
            </div>
            <div>
                <button type='submit'>Update</button>
            </div>

        </form>

    </>
    )
}

export default Edit