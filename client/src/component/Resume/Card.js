import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex no-center'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          
        </div>
        <hr />
        <p className="description">{props.desc}</p>
      </div>
    </>
  )
}

export default Card
