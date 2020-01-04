import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
class Booking extends Component {
   
    render(){
    return (
        <div>
        <div className="my-5 p-5">
        <div className="row">
        <div className="col-md-1">

        </div>
            <div className="col-md-3">
            <div className="source">
                <h5><strong>Source</strong></h5>
                        <select className="form-control" id="locale" >
                        <option value="fsb">Faisalabad</option>
                        <option value="lhr">Lahore</option>
                        <option value="isb">Islamabad</option>                      
                        <option value="mul">Multan</option>
                        </select>
            </div>
            </div>
            <div className="col-md-4">

            </div>
             <div className="col-md-3">
             <div className="destination">
             <h5><strong>Destination</strong></h5>
                 <select className="form-control" id="local">
                    <option value="isb">Islamabad</option>
                    <option value="lhr">Lahore</option>
                    <option value="fsb">Faisalabad</option>
                    <option value="mul">Multan</option>
                    </select>
                 </div>
                 </div>
          </div>
      
        </div>
        <div className="row">
        <div className="col-md-1"> 

        </div>
        <div className="col-md-6"> 
            <div className="p-5">
            <h4 ><strong>User Details</strong></h4>
                        <form>
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="Name"/>
                           </div>

                           <div className="form-group">
                               <input type="email" className="form-control" placeholder="Email"/>
                           </div>
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="CNIC"/>
                           </div>

                           <div className="form-group">
                               <input type="tel" className="form-control" placeholder="Phone"/>
                           </div>
                           <textarea className="form-control" cols="30" rows="5" placeholder="Any special note e.g you have any medical issue"/>
                           <br/>
                        <Link to="/" className="btn btn-outline-primary text-uppercase" mt-1="true" >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fab fa-teleram-plane" aria-hidden/>
                        &nbsp;Send
                        </Link>
                        </form>
                </div>
                </div>

                <div className="col-md-1"> 

                </div>
        <SeatReservation className="col-md-4">
        {/* <div className="reserve" >
          <h5 ><strong>Please select a seat</strong></h5>
        </div> */}
        <div className="plane">
        <div className="exit exit--front fuselage">
          
        </div>
       
        <ol className="cabin fuselage">
          <li className="row row--1">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="1A" />
                <label htmlFor="1A">1A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1B" />
                <label htmlFor="1B">1B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" disabled id="1D" />
                <label htmlFor="1D">Occupied</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1E" />
                <label htmlFor="1E">1E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
                <label htmlFor="1F">1F</label>
              </li>
            </ol>
          </li>
          <li className="row row--2">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="2A" />
                <label htmlFor="2A">2A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2B" />
                <label htmlFor="2B">2B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="2D" />
                <label htmlFor="2D">2D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2E" />
                <label htmlFor="2E">2E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2F" />
                <label htmlFor="2F">2F</label>
              </li>
            </ol>
          </li>
          <li className="row row--3">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="3A" />
                <label htmlFor="3A">3A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3B" />
                <label htmlFor="3B">3B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="3D" />
                <label htmlFor="3D">3D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3E" />
                <label htmlFor="3E">3E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3F" />
                <label htmlFor="3F">3F</label>
              </li>
            </ol>
          </li>
          <li className="row row--4">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="4A" />
                <label htmlFor="4A">4A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4B" />
                <label htmlFor="4B">4B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="4D" />
                <label htmlFor="4D">4D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4E" />
                <label htmlFor="4E">4E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4F" />
                <label htmlFor="4F">4F</label>
              </li>
            </ol>
          </li>
          <li className="row row--5">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="5A" />
                <label htmlFor="5A">5A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5B" />
                <label htmlFor="5B">5B</label>
              </li>
             
              <li className="seat">
                <input type="checkbox" id="5D" />
                <label htmlFor="5D">5D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5E" />
                <label htmlFor="5E">5E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5F" />
                <label htmlFor="5F">5F</label>
              </li>
            </ol>
          </li>
          <li className="row row--6">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="6A" />
                <label htmlFor="6A">6A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6B" />
                <label htmlFor="6B">6B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="6D" />
                <label htmlFor="6D">6D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6E" />
                <label htmlFor="6E">6E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6F" />
                <label htmlFor="6F">6F</label>
              </li>
            </ol>
          </li>
        </ol>
      
      </div>
      </SeatReservation>
       
      </div>
      
      </div>
      
    );
}

}
export default Booking;
const SeatReservation =styled.div`
*,*:before,*:after {
    box-sizing: border-box;
    
  }
  html {
    font-size: 16px;
 
  }
  
  .plane {
    margin: 20px auto;
    max-width: 260px;
    
    border-top: 5px solid #d8d8d8;
    
    
  }
  
  .cockpit {
    height: 150px; 
    position: relative;
    overflow: hidden;
    text-align: center;
    border-bottom: 5px solid #d8d8d8;
  }
 
  
  .exit {
    position: relative;
    height: 50px;
   
    &:before {
      content: "EXIT";
      font-size: 14px;
      line-height: 18px;
      padding: 0px 2px;
      font-family: "Arial Narrow", Arial, sans-serif;
      display: block;
      position: absolute;
      background: green;
      color: white;
      top: 50%;
      transform: translate(0, -50%);
      
      
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  
  .fuselage {
    border-right: 5px solid #d8d8d8;
    border-left: 5px solid #d8d8d8;
    border-bottom: 5px solid #d8d8d8;
   
  }
  
  ol {
    list-style :none;
    padding-left: 10px;
    margin: 0;
   
  
  }
  
  .row {
    
  }
  
  .seats {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;  
      

  }
  
  .seat {
    display: flex;
    flex: 0 0 14.28571428571429%;
    padding: 7px;
    position: relative;  

    &:nth-child(3) {
      margin-right: 14.28571428571429%;
    }
    input[type=checkbox] {
      position: absolute;
      opacity: 0;
    }
    input[type=checkbox]:checked {
      + label {
        background: #bada55;      
        -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
        animation-duration: 300ms;
        animation-fill-mode: both;
      }
    }
    input[type=checkbox]:disabled {
      + label {
        background: #dddddd;
        text-indent: -9999px;
        overflow: hidden;
        &:after {
          content: "X";
          text-indent: 0;
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translate(-50%, 0%);
        }
        &:hover {
          box-shadow: none;
          cursor: not-allowed;
        }
      }
    }
    label {    
      display: block;
      position: relative;    
      width: 100%;    
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5rem;
      padding: 4px 0;
      background: #F42536;
      border-radius: 5px;
      animation-duration: 300ms;
      animation-fill-mode: both;
      
      &:before {
        content: "";
        position: absolute;
        width: 75%;
        height: 75%;
        top: 1px;
        left: 50%;
        transform: translate(-50%, 0%);
        background: rgba(255,255,255,.4);
        border-radius: 3px;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 0px 2px #5C6AFF;
      }
      
    }
  }
  
  @-webkit-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }
  
    100% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  
  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }
  
    100% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  
  .rubberBand {
    -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
  }
`;