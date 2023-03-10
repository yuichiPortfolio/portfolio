import { Button, Image, Link, Modal, Text, useModal } from '@nextui-org/react'

const WorksContinuationModal = () => {
  const { setVisible, bindings } = useModal()
  return (
    <div>
      <Button
        flat
        auto
        rounded
        color="secondary"
        onPress={() => setVisible(true)}
      >
        <Text
          css={{ color: 'inherit' }}
          size={12}
          weight="bold"
          transform="uppercase"
        >
          detail
        </Text>
      </Button>
      <Modal
        blur
        scroll
        closeButton
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text h3 id="modal-title" size={18}>
            Continuation
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="joshua-woroniecki-eUjT8kweNlg-unsplash.jpg"
            width="75%"
            height="75%"
            objectFit="cover"
            alt="Card example background"
          />
          <Text id="modal-description">
            このサイト。
            <br />
            タイトル名の由来は「継続は力なり」。英語のことわざとしては「Practice
            makes perfect」や「Rome was not built in a
            day」などがあるが、「継続」が「力」になると思っているので直訳の「Continuation
            is Power」から採用した。
            <br />
            サイトの作成にはNext.js + Next-UIを使用。デプロイはVercel。
            <br />
            タイトル画像はUnsplashから拝借。Unsplashの
            <Link
              href={
                'https://unsplash.com/ja/%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9'
              }
              isExternal
              target={'_blank'}
            >
              ライセンス
            </Link>
            に則り画像をマウスオーバーするとクリエイターページへのリンクが表示されるようにしている。
            <br />
            Next.jsを勉強して初めて作成したサイト。Next-UIで用意されているコンポーネントを基本的な使い方で構成して、見やすさを優先した。
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={() => setVisible(false)}>
            <Link color={'text'} href={'#'} target={'_blank'}>
              GitHub
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default WorksContinuationModal
