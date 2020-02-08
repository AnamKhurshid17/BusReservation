import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import moment from 'moment'; //used to disable previous dates

 class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeBus_type = this.onChangeBus_type.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
       this.onChangeDDate = this.onChangeDDate.bind(this);
        this.onChangeDeparture_time = this.onChangeDeparture_time.bind(this);
        this.onChangeArrival_time = this.onChangeArrival_time.bind(this);
        this.onChangeFare = this.onChangeFare.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeAvailable_seats = this.onChangeAvailable_seats.bind(this);
        this.onChangeStops = this.onChangeStops.bind(this);
        this.onChangeBooking = this.onChangeBooking.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            bus_type: ' ',
            source: ' ',
            destination: ' ',
            ddate: new Date(),
            departure_time: ' ',
            arrival_time: ' ',
            fare: 0,
            stops: 0,
            available_seats:0,
            status: ' ',
            booking: false
        }
    }

    onChangeBus_type (e) {
        this.setState({
           bus_type: e.target.value
        });
    }

    onChangeSource(e) {
        this.setState({
           source: e.target.value
        });
    }
    onChangeDestination (e) {
        this.setState({
          destination: e.target.value
        });
    }
    onChangeDDate (date) {
        this.setState({
           ddate: date
           
        });
    }
    onChangeDeparture_time(e) {
        this.setState({
           departure_time: e.target.value
        });
    }
    onChangeArrival_time (e) {
        this.setState({
           arrival_time: e.target.value
        });
    }
    onChangeFare  (e) {
        this.setState({
           fare: e.target.value
        });
    }
    onChangeAvailable_seats (e) {
        this.setState({
          available_seats: e.target.value
        });
    }
    onChangeStops (e) {
        this.setState({
          stops: e.target.value
        });
    }
    onChangeBooking  (e) {
        this.setState({
           booking: e.target.value
        });
    }
    onChangeStatus  (e) {
        this.setState({
          status: e.target.value
        });
    }
    // state = {
    //     startDate: new Date(),
    //   };
    
    
    
    //   handleChange = date => {
    //     this.setState({
    //       startDate: date
    //     });
    //   };
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Bus Type: ${this.state.bus_type}`);
        console.log(`Source: ${this.state.source}`);
        console.log(`Destination: ${this.state.destination}`);
        console.log(`Departure Date: ${this.state.ddate}`);
        console.log(`Departure Time: ${this.state.departure_time}`);
        console.log(`Arrival Time: ${this.state.arrival_time}`);
        console.log(`Fare: ${this.state.fare}`);
        console.log(`Available Seats: ${this.state.available_seats}`);
        console.log(`Stops: ${this.state.stops}`);
        console.log(`Booking: ${this.state.booking}`);
        console.log(`Status: ${this.state.status}`);
     
//developing communication with backend post get requests
const newBus={
    bus_type: this.state.bus_type,
    source: this.state.source,
    destination: this.state.destination,
    ddate: this.state.ddate,
    departure_time: this.state.departure_time,
    arrival_time: this.state.arrival_time,
    fare: this.state.fare,
    stops: this.state.stops,
    available_seats:this.state.available_seats,
    status: this.state.status,
    booking: this.state.booking
}
//making http call

axios.post('http://localhost:4000/busdb/add',newBus)
.then(res => console.log(res.data));//axios is returing a promise that will be called once data is added



        this.setState({
            bus_type: '',
            source: '',
            destination: '',
            ddate: new Date(),
            departure_time: '',
            arrival_time: '',
            fare: 0,
            stops: 0,
            available_seats:0,
            status: '',
            booking: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20, marginRight:20, marginLeft:20, marginBottom:20}}>
                <h3 style={{textAlign: 'center', textDecoration: 'bold'}}>Create New Bus Schedule</h3>
                <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-8" style={{display: 'flex', alignItems: 'center', msAlignSelf: 'center'}}>
                <form style={{ background: '#55acf3', padding: '2em', borderRadius: '2em'}}   onSubmit={this.onSubmit}>
                   
                    <div className="form-group">
                        <label>Bus Type: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.bus_type}
                                onChange={this.onChangeBus_type}
                                />
                    </div>
                    <div className="form-group">
                        <label>Source: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.source}
                                onChange={this.onChangeSource}
                                />
                    </div>
                    <div className="form-group">
                        <label>Destination: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.destination}
                                onChange={this.onChangeDestination}
                                />
                    </div>
                    <div className="form-group">
                        <label>Departure Date: </label><br></br>
                        <DatePicker  selected={this.state.ddate}  onChange={this.onChangeDDate}   
                          minDate={moment().toDate() } dateFormat="dd/MM/yyyy" placeholderText="Select departure day"  />
                    </div>
                    <div className="form-group">
                        <label>Departure Time: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.departure_time}
                                onChange={this.onChangeDeparture_time}
                                />
                    </div>
                    <div className="form-group">
                        <label>Arrival Time: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.arrival_time}
                                onChange={this.onChangeArrival_time}
                                />
                    </div>
                    <div className="form-group">
                        <label>Fare: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.fare}
                                onChange={this.onChangeFare}
                                />
                    </div>
                    <div className="form-group">
                        <label>Stops: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.stops}
                                onChange={this.onChangeStops}
                                />
                    </div>
                    <div className="form-group">
                        <label>Available Seats: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.available_seats}
                                onChange={this.onChangeAvailable_seats}
                                />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                                />
                    </div>
                    <div className="form-group">
                    <label>Booking: </label>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="bookingOptions"
                                    id="unavailable"
                                    value="False"
                                    checked={this.state.booking==='False'}
                                    onChange={this.onChangeBooking}
                                    />
                            <label className="form-check-label">No booking allowed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="bookingOptions"
                                    id="available"
                                    value="True"
                                    checked={this.state.booking==='True'}
                                    onChange={this.onChangeBooking}
                                    />
                            <label className="form-check-label">Booking allowed</label>
                        </div>      
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Bus Schedule" className="btn btn-primary"  />
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Create;
