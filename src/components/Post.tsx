import { IPost } from '../models/models'
import styled from 'styled-components'
import Modal from './Modal'
import { useState } from 'react'

const PostData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: #9b9b9b;

  margin: 0 0 1rem 0;
`

const CardTheme = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
  color: #eb0028;
  margin: 1rem 0;
`
const CardCaption = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 30px;
  color: #000000;
  margin: 0 0 1rem 0;
`
const PostDataAuthor = styled.div`
  color: #000000;
  font-weight: 500;
`
const Dotted = styled.div`
  width: 3px;
  height: 3px;
  background: #d7d7d7;
  border-radius: 50%;
`
const CardText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #929292;
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

  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

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

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <Card onClick={() => setModalActive(true)}>
        <CardImg
          src={post.img}
          alt='card-img'
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          className='layout__card-img'
        />
        <CardTheme className='card__theme'>{post.tags}</CardTheme>
        <CardCaption className='card__caption'>{post.title}</CardCaption>
        <PostData>
          <PostDataAuthor>{post.autor}</PostDataAuthor>
          <Dotted />
          <div className='card__post-data-date'>{post.date}</div>
          <Dotted />
          <div className='card__post-data-views'>{post.views}</div>
        </PostData>
        <CardText className='card__text'>{post.text}</CardText>
      </Card>
      <Modal active={modalActive} setActive={setModalActive}>
        <CardImg
          src={post.img}
          alt='card-img'
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          className='layout__card-img'
        />
        <CardTheme className='card__theme'>{post.tags}</CardTheme>
        <CardCaption className='card__caption'>{post.title}</CardCaption>
        <PostData>
          <PostDataAuthor>{post.autor}</PostDataAuthor>
          <Dotted />
          <div className='card__post-data-date'>{post.date}</div>
          <Dotted />
          <div className='card__post-data-views'>{post.views}</div>
        </PostData>
      </Modal>
    </>
  )
}

export default Post
