import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='skills'>
        <div className='container'>
        <div className='heading'>
            <h1>My skills</h1>
            <h4>All my computer skills.</h4>
          </div>

          <div className='content grid-skills'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} completed={val.completed} />
            })}

            {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
