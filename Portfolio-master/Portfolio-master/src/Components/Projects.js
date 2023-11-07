import React from 'react'

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
              <p>{e.description}</p>
              <p>Tech stack {e.techUsed}</p>
              <a href={e.link}>Open Link</a>
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