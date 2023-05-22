import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'
import useScrollDirection from '../hook/useScrollDirection'
import Navigation from './Navigation'
import Layout from './Layout'

const Bar = styled.div`
  top: 0px;
  position: sticky;
  width: 100%;
  height: auto;
  background: #ffffff;
`

const Wrapper = styled.div`
  height: 100%;

  .category-filters-enter {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
  .category-filters-enter-active {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }
  .category-filters-exit {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
  .category-filters-exit-active {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
`

export default function App() {
  const scrollDirection = useScrollDirection()

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
  })

  return (
    <Wrapper>
      <Bar>
        <CSSTransition
          in={scrollDirection === 'up' || inView}
          timeout={300}
          classNames='category-filters'
          unmountOnExit
        >
          <Navigation />
        </CSSTransition>
      </Bar>
      <div className='observable' ref={ref}></div>
    </Wrapper>
  )
}
