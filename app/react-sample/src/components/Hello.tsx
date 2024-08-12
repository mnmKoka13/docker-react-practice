// Hello はクリックするとアラートを出すテキストを返します
const Hello = () => {
  const onClick = () => {
    alert('Hello')
  }
  const text = 'Hello, React'

  // テキストを子に持つ div 要素を返す
  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

// 外部から Hello を使えるようにする
export default Hello