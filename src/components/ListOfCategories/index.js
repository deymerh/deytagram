import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fechData = async () => {
      const res = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      const response = await res.json()
      setCategories(response)
    }
    fechData()
  })
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
