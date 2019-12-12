import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
class Booking extends Component {
   
    render(){
    return (
        <div>
        <div className="my-5 p-5">
        <div className="row">
            <div className="col-md-6">
            <div className="source">
                <h5><strong>Source</strong></h5>
                        <select class="form-control" id="locale">
                        <option value="fsb">Faisalabad</option>
                        <option value="lhr">Lahore</option>
                        <option value="isb">Islamabad</option>
                       
                        <option value="mul">Multan</option>
                  </select>
            </div>
            </div>
             <div className="col-md-6">
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
         
        <SeatReservation className="col-md-6">
        <div className="plane">
        <div className="cockpit">
          <h1>Please select a seat</h1>
        </div>
        <div className="exit exit--front fuselage">
          
        </div>
        <ol className="cabin fuselage">
          <li className="row row--1">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1B" />
                <label for="1B">1B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" disabled id="1D" />
                <label for="1D">Occupied</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1E" />
                <label for="1E">1E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="1F" />
                <label for="1F">1F</label>
              </li>
            </ol>
          </li>
          <li className="row row--2">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="2A" />
                <label for="2A">2A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2B" />
                <label for="2B">2B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="2D" />
                <label for="2D">2D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2E" />
                <label for="2E">2E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2F" />
                <label for="2F">2F</label>
              </li>
            </ol>
          </li>
          <li className="row row--3">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="3A" />
                <label for="3A">3A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3B" />
                <label for="3B">3B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="3D" />
                <label for="3D">3D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3E" />
                <label for="3E">3E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3F" />
                <label for="3F">3F</label>
              </li>
            </ol>
          </li>
          <li className="row row--4">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="4A" />
                <label for="4A">4A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4B" />
                <label for="4B">4B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="4D" />
                <label for="4D">4D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4E" />
                <label for="4E">4E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4F" />
                <label for="4F">4F</label>
              </li>
            </ol>
          </li>
          <li className="row row--5">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="5A" />
                <label for="5A">5A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5B" />
                <label for="5B">5B</label>
              </li>
             
              <li className="seat">
                <input type="checkbox" id="5D" />
                <label for="5D">5D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5E" />
                <label for="5E">5E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5F" />
                <label for="5F">5F</label>
              </li>
            </ol>
          </li>
          <li className="row row--6">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="6A" />
                <label for="6A">6A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6B" />
                <label for="6B">6B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="6D" />
                <label for="6D">6D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6E" />
                <label for="6E">6E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6F" />
                <label for="6F">6F</label>
              </li>
            </ol>
          </li>
          <li className="row row--7">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="7A" />
                <label for="7A">7A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7B" />
                <label for="7B">7B</label>
              </li>
              
              <li className="seat">
                <input type="checkbox" id="7D" />
                <label for="7D">7D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7E" />
                <label for="7E">7E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7F" />
                <label for="7F">7F</label>
              </li>
            </ol>
          </li>
          <li className="row row--8">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="8A" />
                <label for="8A">8A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8B" />
                <label for="8B">8B</label>
              </li>
             
              <li className="seat">
                <input type="checkbox" id="8D" />
                <label for="8D">8D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8E" />
                <label for="8E">8E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8F" />
                <label for="8F">8F</label>
              </li>
            </ol>
          </li>
          <li className="row row--9">
            <ol className="seats" type="A">
              <li className="seat">
                <input type="checkbox" id="9A" />
                <label for="9A">9A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9B" />
                <label for="9B">9B</label>
              </li>
            
              <li className="seat">
                <input type="checkbox" id="9D" />
                <label for="9D">9D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9E" />
                <label for="9E">9E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9F" />
                <label for="9F">9F</label>
              </li>
            </ol>
          </li>
        </ol>
 
      </div>
      </SeatReservation>
            <div className="col-md-6"> 
            <div className="p-5">
            <h4><strong>User Details</strong></h4>
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
                        <Link className="btn btn-outline-primary text-uppercase" mt-1 >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fab fa-teleram-plane" aria-hidden/>
                        &nbsp;Send
                        </Link>
                        </form>
                </div>
                </div>
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
    max-width: 300px;
  }
  
  .cockpit {
    height: 250px; 
    position: relative;
    overflow: hidden;
    text-align: center;
    border-bottom: 5px solid #d8d8d8;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 500px;
      width: 100%;
      border-radius: 50%;
      border-right: 5px solid #d8d8d8;
      border-left: 5px solid #d8d8d8;
    }
    h1 {
      width: 60%;
      margin: 100px auto 35px auto;
    }
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
  }
  
  ol {
    list-style :none;
    padding-left: 10px;
 

    margin: 0;
  }
  
  .row {
    
  }
  
  .seats {
    height: 80px;

    width: 400px;
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