import React from 'react'
import { PhotoCard } from '../PhotoCrad'

export const ListOfPhotoCard = () => {
  return (
    <li>
      {
        [1, 2, 3, 4].map(id => (
          <PhotoCard key={id} />
        ))
      }
    </li>

  )
}