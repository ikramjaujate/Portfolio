import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
        <div className='heading'>
            <h1>My resume</h1>
            <h4>My career in the world of work and education.</h4>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                
                <h1 className="education">Education</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                
                <h1 className="education">Job Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="button-flex">
      <a href="images/Ikram_Jaujate_Resume.pdf" class="button-19 button" download><i class="fa fa-download"></i>Download resume</a>

     
              </div>
    </>
  )
}

export default Resume
