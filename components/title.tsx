import { Image, Text, Tooltip } from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import TooltipContent from './tooltipContent'

const Title = () => {
  return (
    <>
      <Text
        h1
        className={styles.title}
        css={{ textGradient: '45deg, $blue600 10%, $pink600 90%' }}
        weight={'bold'}
      >
        Continuation
      </Text>
      <Tooltip
        className={styles.homeImage}
        content={<TooltipContent />}
        contentColor={'primary'}
        placement={'bottom'}
        rounded
      >
        <Image
          alt={''}
          className={styles.homeImage}
          src={'joshua-woroniecki-eUjT8kweNlg-unsplash.jpg'}
          showSkeleton
          autoResize
        />
      </Tooltip>
    </>
  )
}

export default Title
