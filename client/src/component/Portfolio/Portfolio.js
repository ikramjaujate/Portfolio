import React, { useState } from "react";

import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import HyperModal from 'react-hyper-modal';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          {/*<div className='heading text-center '>

            <h1>My Portfolio</h1>
  </div>*/}

          <div className='heading'>
            <h1>My portfolio</h1>
            <h4>All the activities carried out during the last 3 years.</h4>
          </div>
          <div className="row-btn">
          <button className='button-19 marginBtn' onClick={() => setIsOpen(true)}>
        Hours summary
      </button>
          </div>
          
          <HyperModal
        isOpen={isOpen}
        renderCloseIcon={() => {return null}}
        requestClose={() => setIsOpen(false)}
      >
         <div>

<h1 className="titre">Hours summary</h1>
            </div>
            <span className="resume-years">A summary of the activities carried out in the last 3 years</span>
        <div className='content grid-table'>
            {/*{BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}*/}
           
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Type</th>
                  <th>Hours Spent</th>
                  <th>Hours Counted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Karate</td>
                  <td>SPORT</td>
                  <td>+100H</td>
                  <td>10H</td>
                </tr>
                <tr class="active-row">
                  <td>Advent of Cyber 2020</td>
                  <td>HACKATHON</td>
                  <td>+40H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>IT Junior</td>
                  <td>JOB STUDENT IN IT</td>
                  <td>+100H</td>
                  <td>10H</td>
                </tr>
                <tr class="active-row">
                  <td>Tutoring students</td>
                  <td>TUTORING</td>
                  <td>10H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>Online Course : Frontend</td>
                  <td>8H</td>
                  <td>08H</td>
                </tr>
                <tr class="active-row">
                  <td>NodeJS & MongoDB</td>
                  <td>Online Course : Full Stack</td>
                  <td>10H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>TCP / IP</td>
                  <td>Online Course : Network</td>
                  <td>15H</td>
                  <td>10H</td>
                </tr>

                <tr class='final'>
                  <td colSpan={2}> </td>
                  <td class='final'>Total :</td>
                  <td class='final'>68H</td>
                </tr>

              </tbody>
            </table>
          </div>
      </HyperModal>
          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} explanation={value.explanation} explanation2={value.explanation2} data={value.data} />
            })}

          </div>
         
         </div>
      </section>
    </>
  )
}

export default Portfolio
