import { Card, Col, Row, Text } from '@nextui-org/react'
import WorksContinuationModal from './worksContinuationModal'

const WorksContinuationCard = () => (
  <Card css={{ w: '100%', h: '400px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="black">
          Continuation
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="joshua-woroniecki-eUjT8kweNlg-unsplash.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: 'absolute',
        bgBlur: '#ffffff66',
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000">My portfolio</Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <WorksContinuationModal />
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
)

export default WorksContinuationCard
