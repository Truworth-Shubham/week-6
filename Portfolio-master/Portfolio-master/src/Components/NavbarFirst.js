import React from 'react'

const NavbarFirst = () => {
  
const homeScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const aboutScroll = () => {
window.scrollTo({
  top: 590,
  behavior: "smooth",
});
}
const projectsScroll = () => {
  window.scrollTo({
    top: 1180,
    behavior: "smooth",
  });

}
  return (
    <>
     <div className='navMain-container'>
        <div className='nav-mainChild1'>
            <div className='mainChild1-subChild mainChild1-subChild1'>SHUBHAM SHARMA</div>
        </div>
        <div className='nav-mainChild2'>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={homeScroll}>HOME</div>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={aboutScroll}>ABOUT</div>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={projectsScroll}>PROJECTS</div>
        </div>
     </div>
    </>
  )
}

export default NavbarFirst