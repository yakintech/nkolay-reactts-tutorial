import { Button, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { axiosInstance } from '../../../network/axiosInstance'

interface ProductFormInputs {
  name: string,
  unitPrice: number,
  categoryId: { label: string, value: number },
}


function Create() {

  const { control, handleSubmit } = useForm<ProductFormInputs>()

  const addProduct = (data: ProductFormInputs) => {

    console.log(data);
    

    data.unitPrice = Number(data.unitPrice)

    axiosInstance.post('products', data)
      .then(res => {
        console.log("Response", res)
      })
      .catch(err => {
        console.log("Error", err)
      })

  }

  return (<>

    <form onSubmit={handleSubmit(addProduct)}>
      <div>
        <Controller
          name='categoryId'
          control={control}
          render={({field}) => <Select  {...field} >
            <MenuItem value={1}>Category 1</MenuItem>
            <MenuItem value={2}>Category 2</MenuItem>
            <MenuItem value={3}>Category 3</MenuItem>
          </Select>}
        />
      </div>
      <div>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => <TextField {...field} />}
        />
      </div>
      <div>
        <Controller
          name='unitPrice'
          control={control}
          defaultValue={0}
          render={({ field }) => <TextField {...field} />}
        />
      </div>




      {/* <button type='submit'>Add</button> */}
      <Button type='submit' variant='contained'>Add</Button>

    </form>

  </>)
}

export default Create