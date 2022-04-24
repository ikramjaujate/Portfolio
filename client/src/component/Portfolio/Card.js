import React, { useState } from "react"
import { Carousel } from 'react-carousel-minimal';
import "./Portfolio.css"
import { FaArrowLeft } from 'react-icons/fa'
import {GiPalmTree} from 'react-icons/gi'
import { DiGithub, DiGithubAlt } from 'react-icons/di'
const Card = (props) => {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([{}])
  const [isHere, setisHere] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              {/*<img src={props.image} alt='' />*/}
              <div>

                <Carousel
                  data={props.data}
                  time={2000}
                />

              </div>
            </div>
            <div className='modal-text right'>

              <h1>{props.title}</h1>
              <p>{props.explanation}</p>
              <p>{props.explanation2}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
              <GiPalmTree/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
