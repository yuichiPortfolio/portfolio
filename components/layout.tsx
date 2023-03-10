import Header from './header'
import { ReactNode } from 'react'
import { Container } from '@nextui-org/react'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
