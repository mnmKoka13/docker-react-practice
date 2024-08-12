import React from 'react'

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      {/* for の代わりに htmlFor */}
      <label htmlFor="name">名前</label>
      {/* class や onchange の代わりに、className や onChange */}
      <input
        id="name"
        className="input-name"
        type="text"
        onChange={onChange}
      />
    </div>
  )
}

export default Name