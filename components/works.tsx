import { Grid, Text } from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import ContentCard from './contentCard'
import WorksContinuationCard from './worksContinuationCard'

const Works = () => {
  return (
    <>
      <Text
        h2
        id={'works'}
        className={styles.works}
        css={{ textGradient: '45deg, $yellow600 10%, $red600 90%' }}
        weight={'bold'}
      >
        Works
      </Text>
      <Grid.Container gap={3} justify={'center'}>
        <Grid xs={12} sm={6} lg={4}>
          <WorksContinuationCard />
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <ContentCard />
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <ContentCard />
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Works
