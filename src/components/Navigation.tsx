import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hook/redux'
import Post from '../components/Post'
import styled from 'styled-components'

const SubMenu = styled.ul`
  position: absolute;
  list-style: none;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e9e9e9;
  margin-top: 20px;
  /* transition: all 0.2s; */

  /* &:hover {
    opacity: 1;
  } */
`
const Nav = styled.nav``

const SubMenuItem = styled.li`
  min-width: 136px;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9e9e9;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  position: relative;

  margin: 0 0 3rem 0;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
`
const NavMenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Arrow = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0;
  width: 10px;
  height: 6px;
`
const ArrowLeft = styled.span`
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 8px;
  width: 6px;
  height: 2px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 2px;

  &:after {
    content: '';
    background-color: #000000;
    width: 6px;
    height: 2px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }
`
const ArrowRight = styled.span`
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 12px;
  width: 6px;
  height: 2px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;

  &:after {
    content: '';
    background-color: #000000;
    width: 6px;
    height: 2px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }
`

const NavMenuItem = styled.li`
  position: relative;
  padding: 21.5px 0 20px;

  ${SubMenu} {
    opacity: 0;
    z-index: -1;
  }
  &:hover ${SubMenu} {
    opacity: 1;
    z-index: 2;
  }
  &:hover ${ArrowLeft}:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }
  &:hover ${ArrowRight}:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }
`

function Navigation() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Demos</span>
              <Arrow>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <a href='#'>Post Header</a>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#'>Post Layout</a>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Posts</span>
              <Arrow>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>
            <SubMenu>
              <SubMenuItem className='menu-item menu-item-type-post_type menu-item-object-post menu-item-31507'>
                <a href='https://dom-vod-snab.ru/zameana-nasosa-ecv/'>
                  Замена насоса ЭЦВ
                </a>
              </SubMenuItem>
              <SubMenuItem className='menu-item menu-item-type-post_type menu-item-object-post menu-item-31512'>
                <a href='https://dom-vod-snab.ru/demontazh-nasosov/'>
                  Post Layout
                </a>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navigation
