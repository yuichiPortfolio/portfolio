import { Card, Text } from '@nextui-org/react'

type Props = {
  text: string
}

const MockItem = ({ text }: Props) => {
  return (
    <Card css={{ h: '$20', $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default MockItem
