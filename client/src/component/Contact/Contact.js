import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { DiGithub, DiGithubAlt } from 'react-icons/di'
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='heading text-center'>

          <h1>CONTACT</h1>
        </div>
        <div className='ContactflexBtn button'>

              <button className='btn_shadow'>
                <a href="https://www.linkedin.com/in/ikram-jaujate-ouldkhala-08176893">
                  <FaLinkedin size={30} color={'#0072b1'} className="logo-hover" /></a>
              </button>
              <button className='btn_shadow'>
                <a href="https://github.com/ikramjaujate">
                  <DiGithubAlt size={30} /></a>
              </button>
            </div>
       
        {/*<div className='container top'>
          <div className='heading text-center'>

            <h1>CONTACT</h1>
          </div>

          <div className='content d_flex_contact'>
            
            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>*/}
      </section>
    </>
  )
}

export default Contact
