import React from "react"
import "./Home.css"

import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { DiGithub, DiGithubAlt } from 'react-icons/di'
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3> HELLO WORLD !</h3>
            <h1>
              I’m <span>Ikram Jaujate Ouldkhala</span>
            </h1>
            <p>I was born on December 3, 1999 in Madrid, Spain 🇪🇸. <br />
              I love to learn new things and I always try to find solutions for all kind of problems I or others might have. </p>
            <p>I am currently in my last year of a bachelor degree in computer science at <span className="ephec">EPHEC</span>.

              Since mid-February I've been on internship at <span className="bnppf">BNP Paribas Fortis</span>  and I am really enjoying it. The level of requirement is much higher than I thought but this allows me to learn a lot of new concepts and techniques.

              This last study year is coming to an end and I will probably be graduated at the end of <span className="june">June 2022</span>.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                  
                  <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/in/ikram-jaujate-ouldkhala-08176893">
                      <FaLinkedin size={30} color={'#0072b1'} className="logo-hover" /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://github.com/ikramjaujate">
                      <DiGithubAlt size={30} /></a>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img className="image-ikram" src={'ikram2.png'} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
