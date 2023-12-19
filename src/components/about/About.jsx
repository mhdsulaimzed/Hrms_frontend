import React from 'react'
import './About.css'



function About() {
  return (
    <div>


      <header className="masthead" style={{ backgroundImage: 'url("../about-bg.jpg")' }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>About Us</h1>

              </div>
            </div>
          </div>
        </div>
      </header>

      <div>

        <h2 className="post-title">HRMS Human Resource Management System</h2>
        <h3 className="post-subtitle">Structured For HR Managers</h3>
        <hr className='my-4' />
        <h2 className="post-title">Developed By Skilled Engineers at Hamon</h2>
        <h3 className="post-subtitle">Nothing is a Bottleneck Here at Hamon</h3>
        <hr className='my-4' />
        <h2 className="post-title">Stay Tuned For More Features</h2>
        <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
        <hr className='my-4' />

      </div>
      <footer className="border-top"> </footer>
    </div>
  )
}

export default About
