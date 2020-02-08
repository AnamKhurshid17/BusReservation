import React, {Component} from 'react';
// import ReactTable from 'react-table-6';
// import 'react-table-6/react-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import matchSorter from 'match-sorter'
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Bus=props =>(  
  <tr>
        <td>{props.bus.bus_type}</td>
        <td>{props.bus.source}</td>
        <td>{props.bus.destination}</td>
        <td>{props.bus.ddate}</td>
        <td>{props.bus.departure_time}</td>
        <td>{props.bus.arrival_time}</td>
        <td>{props.bus.fare}</td>
        <td>{props.bus.stops}</td>
        <td>{props.bus.available_seats}</td>
        <td>{props.bus.status}</td>
        <td className={props.bus.available_seats ? 'available': 'unavailable'}><Link to="/Booking" className="btn btn-outline-primary text-uppercase" mt-1>Book
      </Link></td>
        <td>
            <Link to={"/Edit/"+props.bus._id}>Edit</Link>
        </td>
      {/* //  :
      //     <td>
      //     <Link to="/Booking" className="btn btn-outline-primary text-uppercase" mt-1 disabled> No Book
      //     </Link>
      //   </td>} */} 
  </tr>
)//provide data  for a single row to print

// buttonDisplay() {
//   if( {available_seats}>0) 
//   return <td><button>Logout</button></td>
//     else
//     return <td> <button>Login</button></td>
//   }

class Schedule extends Component  {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     this.state = {    products:[]  }; //setting initial state
  }
 
    
//initial request to backend to get list of buses from database
componentDidMount(){
  axios.get('http://localhost:4000/busdb/')
  .then(response => {
    this.setState({products: response.data});//assigning data got from database to product array
  })
  .catch(function(error){
    console.log(error);
  })
}
componentDidUpdate() {
  axios.get('http://localhost:4000/busdb/')
  .then(response => {
      this.setState({bus: response.data});
  })
  .catch(function (error) {
      console.log(error);
  })   
}
onChangeBus_type (e) {
  this.setState({
     bus_type: e.target.value
  });
}

  busSchedule(){
    return this.state.products.map(function(currentBus,i){
      return<Bus bus={currentBus} key={i}/>
    });
  }

  render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
   //   const { products } = this.state;
      // const options = {
      //   sortName: "ddate",  //default sort column name
      //   sortOrder: "asc",
      // };
  
    return (
      <div>
    <h3 style={{marginLeft:30}}> Bus Schedule</h3>
     <table className="table table-stripped"  data-sort-name="ddate" data-sort-order="asc" style={{marginTop:20}}>
        <thead>
        <tr>
              <th>Bus Type</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Stops</th>
              <th>Fare</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Booking</th>
              <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {this.busSchedule()}
        </tbody>

        </table>
      </div>
    
    );
  }
}

export default Schedule;

