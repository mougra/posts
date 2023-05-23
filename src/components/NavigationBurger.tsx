import React from 'react'
import styled from 'styled-components'

const SubMenu = styled.ul`
  position: absolute;
  list-style: none;
  background-color: #ffffff;
  padding: 1.25rem;
  border: 1px solid #e9e9e9;

  margin-top: 1.25rem;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.25, 1.7, 0.35, 0.8);
`

interface NextMenuProps {
  position: string
}
const NextMenu = styled.ul<NextMenuProps>`
  position: absolute;
  right: -50%;
  top: 1rem;
  list-style: none;
  background-color: #ffffff;
  padding: 1.25rem;
  border: 1px solid #e9e9e9;
  transition: all 1s cubic-bezier(0.25, 1.7, 0.35, 0.8);
`
const Nav = styled.nav`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  color: #000000;
`

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

  a {
    color: black;
    text-decoration: none;
  }
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  position: relative;
  flex-direction: column;
  padding: 1rem 2rem;

  &:hover {
    cursor: pointer;
  }
`
const NavMenuItemContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  padding: 0.5rem 0;
`

interface ArrowProps {
  rotate: string
}

const Arrow = styled.div<ArrowProps>`
  width: max-content;
  position: relative;
  cursor: pointer;
  margin: 0;
  width: 10px;
  height: 6px;
  transform: ${({ rotate }) =>
    rotate === 'true' ? 'rotate(0)' : 'rotate(90deg)'};
`
const ArrowLeft = styled.span`
  position: absolute;
  background-color: transparent;
  top: 7px;
  left: 0;
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
  top: 7px;
  left: 4px;
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
    pointer-events: all;
  }
  &:hover ${ArrowLeft}:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }
  &:hover ${ArrowRight}:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }

  border-bottom: 1px solid #e9e9e9;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`
const SubMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  + ${NextMenu} {
    opacity: 0;
    z-index: 0;
  }
  + ${NextMenu}:hover {
    opacity: 1;
    z-index: 4;
  }
  &:hover + ${NextMenu} {
    opacity: 1;
    z-index: 4;
  }
`

function NavigationBurger() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Demos</span>
              <Arrow rotate={true.toString()}>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Header</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#posts__section'>Post Layout</a>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Buttons</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Post</span>
              <Arrow rotate={true.toString()}>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Header</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#posts__section'>Post Layout</a>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Buttons</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Features</span>
              <Arrow rotate={true.toString()}>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Header</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#posts__section'>Post Layout</a>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Buttons</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={true.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Categories</span>
              <Arrow rotate={true.toString()}>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Header</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={false.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#posts__section'>Post Layout</a>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Buttons</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={false.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuItemContainer>
              <span>Shop</span>
              <Arrow rotate={true.toString()}>
                <ArrowLeft />
                <ArrowRight />
              </Arrow>
            </NavMenuItemContainer>

            <SubMenu>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Header</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={false.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
              <SubMenuItem>
                <a href='#posts__section'>Post Layout</a>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuContainer>
                  <a href='#posts__section'>Post Buttons</a>
                  <Arrow rotate={false.toString()}>
                    <ArrowLeft />
                    <ArrowRight />
                  </Arrow>
                </SubMenuContainer>
                <NextMenu position={false.toString()}>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Header</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Post Layout</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Share Buttons</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Gallery Post</a>
                  </SubMenuItem>
                  <SubMenuItem>
                    <a href='#posts__section'>Video Post</a>
                  </SubMenuItem>
                </NextMenu>
              </SubMenuItem>
            </SubMenu>
          </NavMenuItem>

          <NavMenuItem>
            <span>Buy Now</span>
          </NavMenuItem>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavigationBurger
