import React from 'react'

type ContainerProps = {
  title: string
  children: React.ReactNode
}

// Container は赤背景のボックスの中にタイトルと子要素を表示します
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* props の children を埋め込むと、
      このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="Hello">
      <p> ここの部分が背景色で囲まれます </p>
    </Container>
  )
}

export default Parent