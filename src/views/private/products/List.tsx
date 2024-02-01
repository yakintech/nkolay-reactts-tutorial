import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../../../network/axiosInstance'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext, FavoritesContextType } from '../../../context/FavoritesContext'
import { CartContext } from '../../../context/CartContext'

function List() {

  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  //context e bağlandım ve addFavorites fonksiyonunu aldım
  const { addFavorites } = useContext(FavoritesContext) as FavoritesContextType
  const { addToCart } = useContext(CartContext)

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

  const navigate = useNavigate();

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
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params: any) => {
        return (
          <Button onClick={() => navigate('/products/edit/' + params.id)} variant='outlined' color='primary'>Edit</Button>
        )
      }
    },
    {
      field: "Add to Favorites",
      headerName: "Add to Favorites",
      width: 180,
      renderCell: (params: any) => {
        return (
          <Button onClick={() => addFavorites(params.row)} variant='outlined' color='primary'>Add to Favorites</Button>
        )
      }
    },
    {
      field: "addtocart",
      headerName: "Add to Cart",
      width: 150,
      renderCell: (params: any) => {
        return (
          <Button onClick={() => addToCart(params.row)} variant='outlined' color='primary'>Add to Cart</Button>
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