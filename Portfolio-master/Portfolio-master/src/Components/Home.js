import React from 'react'

const Home = () => {

    const project = () => {

        window.scrollTo({
            top: 1150,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className='home-main-container'>
                <div className='homeContainer-child1'>
                    <div className='homeChild1-subchild'>
                        <h1 className='homeHeading'>HEY, I'M SHUBHAM SHARMA</h1>
                    </div>
                    <div className='homeChild1-subchild-text'>
                        <p className='home-about-text'>A Fullstack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className='homeChild1-subchild-project' onClick={project}>
                        <p href='#' className='btn btn--bg'>Projects</p>
                    </div>
                </div>
                <div className='homeContainer-child2'>
                    <div className='linkdin-div'>
                        <a href='https://www.linkedin.com/in/shubham-sharma-2127b827b'>
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </div>
                    <div className='github-div'>
                        <a href='https://github.com/Shubham1032'>
                            <i class="fa-brands fa-github fa-2xl"></i></a>
                    </div>
                </div>
                <div className='scroll-mouse-container'>
                    <div className='mouse'></div>
                </div>
            </div>

        </>
    )
}

export default Home