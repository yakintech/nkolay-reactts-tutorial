import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../../network/axiosInstance'
import { CartContext } from '../../../context/CartContext'

function Detail() {

  const { id } = useParams()
  const [detail, setdetail] = useState<ProductModel>({} as ProductModel)

  const { addToCart } = useContext(CartContext)

  console.log(detail);

  useEffect(() => {

    axiosInstance.get(`/products/${id}`)
      .then(res => {
        setdetail(res.data)
      })

  }, [])


  return (<>
    <h1>Id: {detail.id}</h1>
    <h1>Name: {detail.name}</h1>
    <h1>Price: {detail.unitPrice?.toFixed(2)}</h1>
    <h1>Stock: {detail.unitsInStock}</h1>
    <h1>Quantity Per Unit: {detail.quantityPerUnit}</h1>
    <button onClick={() => addToCart(detail as any)}>Add to Cart</button>

  </>)
}

export default Detail


interface ProductModel {
  id: number,
  name: string,
  unitPrice: number,
  unitsInStock: number,
  quantityPerUnit: string,
}


