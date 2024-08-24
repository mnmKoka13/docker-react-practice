import React, { useState, useRef } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
  // 隠されたinput要素を参照するためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null)

  // 選択されたファイルデータを保持するref
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  // 「画像をアップロード」というテキストがクリックされた時のコールバック
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  // ファイルが選択された後に呼ばれるコールバック
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if ( files !== null && files.length > 0) {
      // fileRef.currentが変化しても再描画は発生しない
      fileRef.current = files[0]
    }
  }

  // アップロードボタンがクリックされた時のコールバック
  const onClickUpload = async() => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを呼んでファイルをサーバーにUploadする
      // 今回は5秒待ってからメッセージを表示する
      await sleep(UPLOAD_DELAY)

      setMessage(`${fileRef.current.name} has been successfully upload`)
    }
  }

  return (
    <div>
      <h3>useRef</h3>
      <p style={{ textDecoration: 'underline'}} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept='image/*'
        onChange={onChangeImage}
        style={{ visibility: 'hidden'}}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader