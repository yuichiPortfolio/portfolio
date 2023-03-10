import { ThemeSwitcher } from './ThemeSwitcher'
import { NextComponentType } from 'next'
import { Navbar } from '@nextui-org/react'

const Header: NextComponentType = () => {
  return (
    <header>
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href={'/'}>Continuation</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="#works">Works</Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <ThemeSwitcher />
        </Navbar.Content>
      </Navbar>
    </header>
  )
}

export default Header
