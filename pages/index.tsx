import { Spacer } from '@nextui-org/react'
import Title from '../components/title'
import Works from '../components/works'
import About from '../components/about'

const Home = () => {
  return (
    <>
      <Title />
      <Spacer y={3} />
      <Works />
      <Spacer y={3} />
      <About />
      <Spacer y={3} />
    </>
  )
}

export default Home
