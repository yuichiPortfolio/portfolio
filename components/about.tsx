import { Grid, Text } from '@nextui-org/react'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <>
      <Text
        h2
        id={'about'}
        className={styles.works}
        css={{ textGradient: '45deg, $green600 10%, $yellow600 90%' }}
        weight={'bold'}
      >
        About
      </Text>
      <Grid.Container justify={'center'}>
        <Grid>
          <Text className={styles.aboutContent}>
            １９７８年、兵庫県出身。１児の父。
            <br />
            ４０歳までＩＴと無関係の業界を数社経験する。
            <br />
            ４０歳での退職を機にプログラミングの独学を開始。
            <br />
            メインの言語はTypescriptでサーバーサイドに興味がある。
            <br />
            最近はJavaも使用する。
            <br />
            英語も好き。
            <br />
            タイトルの&apos;Continuation&apos;は「継続は力なり」から思いついたもの。
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default About
