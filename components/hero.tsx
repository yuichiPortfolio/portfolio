import styles from '../styles/hero.module.css'
import { Container } from '@nextui-org/react'

type Props = {
  title: string
  subtitle: string
  imageOn?: boolean
}

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <Container>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </Container>
  )
}

export default Hero
