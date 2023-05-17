import { IPost } from '../models/models'
import styled from 'styled-components'

interface CharacterCardProps {
  post: IPost
}

const PostData = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardImg = styled.img`
  width: 100%;
  max-width: 360px;

  @media (max-width: 992px) {
    max-width: 500px;
  }
  @media (max-width: 576px) {
    max-width: 576px;
  }
`
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 360px;
  width: 100%;

  @media (max-width: 1200px) {
    width: calc((100% - 2 * 2.5rem) / 3);
  }

  @media (max-width: 992px) {
    width: calc((100% - 2.5rem) / 2);
    max-width: 500px;
  }
  @media (max-width: 576px) {
    width: 100%;
    max-width: 576px;
  }
`

function Post({ post }: CharacterCardProps) {
  return (
    <>
      <Card>
        <CardImg
          src={post.img}
          alt='card-img'
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          className='layout__card-img'
        />
        <h4 className='card__theme'>{post.tags}</h4>
        <h2 className='card__caption'>{post.title}</h2>
        <PostData>
          <div className='card__post-data-author'>{post.autor}</div>
          <div className='card__post-data-date'>{post.date}</div>
          <div className='card__post-data-views'>{post.views}</div>
        </PostData>
        <div className='card__text'>{post.text}</div>
      </Card>
    </>
  )
}

export default Post
