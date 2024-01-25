import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../network/axiosInstance'


type SupplierFormInputs = {
  companyName: string,
  contactName: string,
  contactTitle: string
}


function Create() {

  const { register, handleSubmit } = useForm<SupplierFormInputs>()

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
    <form onSubmit={handleSubmit(addSupplier)}>
      <div>
        <label>Company Name</label>
        <input {...register('companyName')} />
      </div>
      <div>
        <label>Contact Name</label>
        <input {...register('contactName')} />
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