import React, { useState, useCallback } from 'react';

type ButtonProps = {
  onClick: () => void
}

// 通常の関数コンポーネント
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButton が再描画されました')

  return (
    <button onClick={onClick}>Decrement</button>
  )
}

// メモ化した関数コンポーネント
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButton が再描画されました')

  return (
    <button onClick={onClick}>Increment</button>
  )
})

// メモ化した関数コンポーネント
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButton が再描画されました')

  return (
    <button onClick={onClick}>Double</button>
  )
})

export const Parent2 = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }

  // useCallbackを使って関数をメモ化
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={increment} />
      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  )
}