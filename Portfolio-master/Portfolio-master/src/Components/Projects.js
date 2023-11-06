import React from 'react'
import bizproImg from '../image/Bizpro.png'
import orangeImg from '../image/orangeImg.png'
import todoImg from '../image/TodoImg.png'
import data from './data'


const Projects = () => {
  return (
    <>
    <div className='project-main-container'>
     <div className='aboutme-heading'>
            <span className='aboutme-heading-text'>PROJECTS</span>
            <span className='aboutme-heading-text-para'>Here you will find some of the projects that I created in my Internship at Truworth wellness.</span>
     </div>
     <div className='projects-main-flex'>
      {
        data.map((e,i)=>{
          return (
            <div className='each-project' key={i}>
            <div className='project-image'>
              <img src={e.img} alt='not found '/>
            </div>
            <div className='projects-info'>
              <h3>{e.title}</h3>
              <p>No wonder that promotion strategy is one of the most important processes in marketing. In fact, it supports your marketing voices to reach your target audience, creates interest, and helps you to engage with them..</p>
              <p>Tech stack {e.techUsed}</p>
              <a href='https://famous-custard-c688c1.netlify.app/'>Open Link</a>
            </div>
          </div>
          )
        })
      }
     </div>
    </div>
    </>
  )
}

export default Projects