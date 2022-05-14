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
                  <th>Theme</th>
                  <th>Topic</th>
                  <th>Location</th>
                  <th>Hours Spent</th>
                  <th>Hours Counted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>External Activity</td>
                  <td>Karate</td>
                  <td>Polideportivo Los Cantos, Madrid & Turnzaal Campus Wemmel, Wemmel</td>
                  <td>+100H</td>
                  <td>10H</td>
                </tr>
                <tr class="active-row">
                  <td>Hackathon</td>
                  <td>Advent of Cyber 2020</td>
                  <td>At home</td>
                  <td>+40H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>Job Student in IT</td>
                  <td>IT Junior</td>
                  <td>Koning Albertstraat, 1600 Sint-Pieters-Leeuw</td>
                  <td>+100H</td>
                  <td>10H</td>
                </tr>
                <tr class="active-row">
                  <td>Tutoring</td>
                  <td>Tutoring students</td>
                  <td>EPHEC & at home</td>
                  <td>10H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>E-learning : Frontend</td>
                  <td>React</td>
                  <td>At home</td>
                  <td>8H</td>
                  <td>08H</td>
                </tr>
                <tr class="active-row">
                  <td>E-learning : Full Stack</td>
                  <td>NodeJS & MongoDB</td>
                  <td>At home</td>
                  <td>10H</td>
                  <td>10H</td>
                </tr>
                <tr>
                  <td>E-learning : Network</td>
                  <td>TCP / IP</td>
                  <td>At home</td>
                  <td>15H</td>
                  <td>10H</td>
                </tr>
                <tr class="active-row">
                  <td>Conference</td>
                  <td>Cybersecurity Challenge</td>
                  <td>At home</td>
                  <td>1H</td>
                  <td>1H</td>
                </tr>
                <tr>
                  <td>Conference</td>
                  <td>Agoria Company Tour</td>
                  <td>At home</td>
                  <td>1H</td>
                  <td>1H</td>
                </tr>
                <tr class='final'>
                  <td colSpan={2}> </td>
                  <td class='final'>Total</td>
                  <td class='final'>+285H</td>
                  <td class='final'>70H</td>
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
