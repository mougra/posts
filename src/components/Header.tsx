import { useRef, useState } from 'react'
import Logo from '../assets/svg/Logotype.svg'
import LogoS from '../assets/svg/Logotype-s.svg'
import searchIcon from '../assets/svg/search.svg'
import Hamburger from './Hamburger'
import styled from 'styled-components'
import { colors } from '../global'
import { useOnClickOutside } from '../hook/outside'

const HeaderStyle = styled.div`
  padding: 29px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 20rem;
  position: fixed;
  background-color: ${colors.whiteopasity};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 29px 0;

  z-index: 20;
  border-right: 1px solid #e9e9e9;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
  }
`

const MenuLogo = styled.img`
  /* width: 161.28px; */
  height: 24px;
  /* margin-left: 1.25rem; */
  padding-bottom: 25px;
  border-bottom: 1px solid #e9e9e9;
  /* background-image: url(${LogoS}); */
`
const MainLogo = styled.img<{ open: boolean }>`
  /* width: 161.28px; */
  height: 27px;

  @media (max-width: 576px) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
`

const Overlay = styled.div<{ open: boolean }>`
  /* width: 161.28px; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* z-index: 10; */
  z-index: ${({ open }) => (open ? '10' : '-10')};
  /* display: block; */
  background-color: rgba(255, 255, 255, 0.7);
  /* @media (max-width: 576px) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  } */
`

function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const node = useRef<HTMLDivElement>(null)
  const close = () => setOpen(false)

  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <HeaderStyle>
        <div ref={node}>
          <StyledMenu open={open}>
            {/* <MenuLogo /> */}
            {/* <img src={Logo} alt=' logo' className='logo' /> */}
            <MenuLogo src={LogoS} alt='logo' />
            <StyledLink onClick={() => close()}>Link 1</StyledLink>
            <StyledLink onClick={() => close()}>Link 2</StyledLink>
            <StyledLink onClick={() => close()}>Link 3</StyledLink>
          </StyledMenu>
          <Hamburger open={open} setOpen={setOpen} />
          <Overlay open={open} onClick={() => close()} />
        </div>

        <a href='#' className='header__logo-link'>
          <MainLogo open={open} src={Logo} alt='logo' />
          {/* <img src={Logo} alt='logo' className='logo' /> */}
        </a>
        <img src={searchIcon} alt=' search-icon' className='search-icon' />
      </HeaderStyle>
    </>
  )
}

export default Header
