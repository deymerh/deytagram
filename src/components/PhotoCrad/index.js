import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from "react-icons/md";
const IMAGE_DEFAUTL = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = IMAGE_DEFAUTL }) => {
  return (
    <article>
      <a href={`/details/${id}`} >
        <ImgWrapper>
          <Img src={src} alt={src} />
        </ImgWrapper>
      </a>
      <Button> <MdFavoriteBorder size='32px' />{likes} likes!</Button>
    </article>
  )
}
