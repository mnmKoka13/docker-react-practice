import React, { useState, useCallback, useDebugValue } from 'react';

// input 向けにコールバックと現在のところ入力内容をまとめたフック
const useInput = () => {
  // 現在の入力値
  const [state, setState] = useState('')

  // input が変化したら、フック内の状態を更新する
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)  => {
    setState(e.target.value)
  }, [])

  // デバッグ用に値を出力する
  // 値は開発者ツールの Components タブに表示される
  useDebugValue(`Input: ${state}`)

  return [state, onChange] as const
}

export const Input = () => {
  const [text, onChangeText] = useInput()

  return (
    <div>
      <h3>カスタムフック</h3>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}