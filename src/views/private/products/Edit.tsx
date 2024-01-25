import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../../network/axiosInstance'

type ProductFormInputs = {
    name: string,
    unitPrice: number,
    unitsInStock: number,
}

function Edit() {

    const { id } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm<ProductFormInputs>()

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

    return (<>
        <form>
            <div>
                <label>Name</label>
                <input {...register('name', { required: true })} />
            </div>
            <div>
                <label>Unit Price</label>
                <input {...register('unitPrice', { required: true })} />
            </div>
            <div>
                <label>Units In Stock</label>
                <input {...register('unitsInStock')} />
            </div>
            <div>
                <button type='submit'>Update</button>
            </div>

        </form>

    </>
    )
}

export default Edit