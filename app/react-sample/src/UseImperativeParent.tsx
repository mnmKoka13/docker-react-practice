import React, { useState, useRef, useImperativeHandle } from "react";

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // useImperativeHandleで、親のrefから参照できる値を設定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleDateString()} now`
      setMessage(message)
    }
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const UseImperativeParent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <h3>useImperativeHandle</h3>
      <button onClick={onClick}>show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

export default UseImperativeParent