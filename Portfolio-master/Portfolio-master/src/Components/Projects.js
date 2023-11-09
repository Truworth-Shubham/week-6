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
            data.map((el, index) => {
              return (
                <div className='each-project' key={index}>
                  <div className='project-image'>
                    <img src={el.img} alt='not found ' />
                  </div>
                  <div className='projects-info'>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <p>Tech stack {el.techUsed}</p>
                    <a href={el.link}>Open Link</a>
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