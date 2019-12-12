import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">

            {/* <!-- Indicators --> */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            {/* <!-- The slideshow --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/pic1.jpeg"  alt="Bus"/>
              </div>
              <div className="carousel-item">
                <img src="assets/pic2.jpeg" alt="Bus"/>
              </div>
              <div className="carousel-item">
                <img src="assets/pic3.jpeg" alt="Bus"/>
              </div>
              <div className="carousel-item">
                <img src="assets/pic4.jpeg" alt="Bus"/>
              </div>  
            </div>

            {/* <!-- Left and right controls --> */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
        </div>
        <div className="row mx-md-n5">
        <div className="col px-md-5">
          <h2 className="p-3">About Us</h2>
        </div>
        </div>
        
        <div className="d-inline-flex pl-3 pr-4">
        <p className="text-justify">
          Getting a bus ticket has never been a hassle free task. 
          Whether having to drive to the cinema or bus stand to book tickets in advance or standing in those 
          seemingly never ending queues is what we had to go through until easyticket.pk came into being. 
          Easyticket.pk has introduced online buying of bus tickets in metropolitan (Lahore , Karachi &amp;
           Islamabad) cities of Pakistan. It is a user friendly application where people can browse and review bus 
           schedule and reserve seat through Easyticket.pk. Bookme.pk is one of the widely used application in
          present generation for booking tickets through online web / application. Now there is no need of queue
           maintenance and rush, one can book 
           the ticket of a bus from his or her smart phone and tablets.
          </p>
          </div>
      </div> 
    )
}
export default Home;
