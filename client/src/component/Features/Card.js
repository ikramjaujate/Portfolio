import React from "react"
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { DiGithub, DiGithubAlt } from 'react-icons/di'
const Card = (props) => {


  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${props.completed}%`,
    backgroundColor: '#01e1ff',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <>
      <div className='box btn_shadow'>
      {props.image}
    <div className="title-dev">{props.title}</div>
        <div className="progress" style={containerStyles}>
      <div className="ligne" style={fillerStyles}>
        <span style={labelStyles}>{`${props.completed}%`}</span>
      </div>
    </div>
      </div>
    </>
  )
}

export default Card
