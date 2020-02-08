import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Edit from './components/pages/Edit'
import Create from './components/pages/Create'
class Admin extends Component{
    render() {
            return (
 <div className="container">
        <div className="row">
                  <div className="col-md-5">
                        <h3><strong>Welcome to Admin Corner</strong></h3>
                        <p>Admin can edit, update and get access to the database</p>
                       
                        <div className="col-md-5">
                        <Link to="/Create" className="btn btn-outline-primary text-uppercase" mt-1>Create
                         </Link> 
                         </div>
                         <div className="col-md-5">
                         <Link to="/Edit" className="btn btn-outline-primary text-uppercase" mt-1>Edit
                         </Link>
                         </div>
                        
                   </div>
            </div>

            </div>


    )
}
}
    export default Admin;
