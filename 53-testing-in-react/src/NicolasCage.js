import React from 'react'

const NicolasCage = (props) => {
  return (
    <div>
      <p>I'm going to steal the Declaration of Independence</p>
      <button className='steal' onClick={props.stealDeclaration}/>
    </div>
  )
}

export default NicolasCage;
