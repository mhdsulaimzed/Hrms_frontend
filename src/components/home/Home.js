import React from 'react'


function Home() {
  return (
    <div>


    <header className="masthead" style={{ backgroundImage: 'url("../home-bg.jpg")' }}>
            <div className="container position-relative px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <div className="page-heading">
                    <h1>Home</h1>
                    
                  </div>
                </div>
              </div>
            </div>
          </header>
    
          <section id="scroll">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle"   src="./close-up-smiley-woman-with-laptop.jpg"  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Welcome to Hamon HRMS, your all-in-one solution for managing people at work.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5"><img className="img-fluid rounded-circle" src="./18940.jpg" alt="..." /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4">To make HR tasks simpler and better for all types of businesses, so everyone can work together more efficiently.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section id="scroll">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src="./human-resources-concept-with-hand.jpg" alt="..." />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">User-Friendly Interface Easily use our software, making it simple.</h2>
                  <p>
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
         
          <footer className="border-top">
            
                  <div className="small text-center text-muted fst-italic">Designed by Sulaim Zaed</div>
               
          </footer>
       
          
        </div>
  )
}

export default Home
