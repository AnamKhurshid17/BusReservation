import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Contactus extends Component {
   
   render(){
        return (
         <section className="my-5 py-5">       {/* //margin top+bottom and top + bottom padding */}
                <div className="container">
                    <div className="well well-sm">
                        <h3 className="p-2"><strong>Our Location</strong></h3>
                     </div>
               
                {/* row for our map and right side form */}
            <div className="row">
                <div className="col-md-7">
                    <iframe class="embed-responsive-item" title="Location" src="https://www.google.com/maps/d/u/0/embed?mid=133GRqchpq518-hgJzuwB8IEmhaBr3xBo" style={{
                        border:'0',
                width:'100%', height:'315px',frameborder:'0' }} allowFullScreen ></iframe>
                <h4> Mailing Address</h4>
                <p style={{color: '#787878'}}>
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                      <strong>&nbsp; Address </strong>  <br/>
                        Office No.421, Floor F2 Jeff Heights 77 E1, Piwadhi Mor, Rawalpindi <br/>
                       
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <strong>&nbsp;Phone Number</strong>  <br/>
                        03001111111<br/>

                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <strong>&nbsp; Email</strong>  <br/>
                        support@easytickets.pk
                </p>
                </div>
            {/* column for form */}
                  <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                        <form>
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="Name"/>
                           </div>

                           <div className="form-group">
                               <input type="email" className="form-control" placeholder="Email"/>
                           </div>

                           <div className="form-group">
                               <input type="tel" className="form-control" placeholder="Phone"/>
                           </div>
                           <textarea className="form-control" cols="30" rows="5" placeholder="Message"/>
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
        </section>
    )
}
}
export default Contactus;
