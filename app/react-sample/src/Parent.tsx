import React, { memo, useState } from 'react';

// 通常の関数コンポーネント
type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz が再描画されました , isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz': ''}</span>
}

// メモ化したコンポーネント
type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzz が再描画されました , isBuzz=${isBuzz}`)
  return (
    <span onClick={onClick}>
      {isBuzz ? 'Buzz' : ''}
    </span>
  )
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
  }

  console.log(`Parent が再描画されました , count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c+1)}>+1</button>
      <p>{`現在のカウント：${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  )
}