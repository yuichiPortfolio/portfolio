import { Grid, Link, Text } from '@nextui-org/react'

const TooltipContent = () => {
  return (
    <>
      <Grid.Container>
        <Grid>
          <Text>
            Photo by&emsp;
            <Link
              href={'https://unsplash.com/ja/@joshua_j_woroniecki'}
              isExternal
              target={'_blank'}
            >
              Joshua Woroniecki
            </Link>
            &emsp;on&emsp;
            <Link href={'https://unsplash.com/ja'} isExternal target={'_blank'}>
              Unsplash
            </Link>
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default TooltipContent
