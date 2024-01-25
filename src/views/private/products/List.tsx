import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../network/axiosInstance'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'

function List() {

  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    load()
  }, [])


  const load = () => {
    axiosInstance.get('products')
      .then((response) => {
        setproducts(response.data)
        setloading(false)
      })
  }

  const deleteProduct = (id: number) => {

    const confirm = window.confirm('Are you sure?')

    if (!confirm) return

    setloading(true)

    axiosInstance.delete(`products/${id}`)
      .then((response) => {
        load()
      })

  }

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 400,
      renderCell: (params: any) => {
        return (
          <p>{params.value.toUpperCase()}</p>
        )
      }
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      width: 200
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params: any) => {
        return (
          <Button onClick={() => deleteProduct(params.id)} variant='outlined' color='error'>Delete</Button>
        )
      }
    }

  ]

  return (<>
    {
      loading ? <h1>Loading..</h1> : <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
        />
      </div>
    }



  </>
  )
}

export default List