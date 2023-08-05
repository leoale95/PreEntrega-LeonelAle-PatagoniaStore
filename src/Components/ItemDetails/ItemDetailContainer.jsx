import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductsbyId } from './asyncMock'

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect (() => {
        getProductsbyId(itemId)
            .then(response =>{
                setProduct(response)
            }) 
            .catch(error =>{
                console.error(error)
            })
    },[itemId])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer