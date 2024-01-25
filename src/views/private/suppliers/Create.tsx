import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../network/axiosInstance'


type SupplierFormInputs = {
  companyName: string,
  contactName: string,
  contactTitle: string
}


function Create() {

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount }

  } = useForm<SupplierFormInputs>()

  const addSupplier = (data: SupplierFormInputs) => {

    axiosInstance.post('suppliers', data)
      .then(res => {
        console.log("Response", res)
      })
      .catch(err => {
        console.log("Error", err)
      })

  }

  return (<>
  <h1>{submitCount}</h1>
    <form onSubmit={handleSubmit(addSupplier)}>
      <div>
        <label>Company Name</label>
        <input {...register('companyName', { required: true })} />
        {errors.companyName && <span style={{color:'red'}}>Company Name is required</span>}
      </div>
      <div>
        <label>Contact Name</label>
        <input {...register('contactName', { required: true })} />
        {errors.contactName && <span style={{color:'red'}}>Contact Name is required</span>}
      </div>
      <div>
        <label>Contact Title</label>
        <input {...register('contactTitle')} />
      </div>
      <div>
        <button type='submit'>Add</button>
        {/* <input type='submit' value='Add' /> */}
      </div>

    </form>

  </>)
}

export default Create