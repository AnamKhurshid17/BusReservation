import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
 import styled from 'styled-components';
const products = [
  {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":0,
      "status":"Unavailable",
      "booking": false

    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
       "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":43,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
       "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
       "booking": true
    }, 
     {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":43,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
       "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":43,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
       "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
       "booking": true
    }, 
  
  
  
  
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":43,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
       "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
       "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1600,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1600,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1600,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1600,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1600,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1600,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1500,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
  
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1900,
      "stops":"0",
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1900,
      "stops":"0",
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1900,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1900,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1900,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1900,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1900,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1900,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1900,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1900,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1900,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
     {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1900,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1900,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1900,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1900,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1900,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1900,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1900,
      "stops":1,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1900,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Gold Class",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1900,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":3000,
      "stops":2,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2900,
      "stops":2,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2800,
      "stops":2,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2800,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2800,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2800,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2800,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2800,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2800,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2800,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2800,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2800,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2900,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2800,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2900,
      "stops":2,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2900,
      "stops":2,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2900,
      "stops":2,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2900,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2800,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2800,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2800,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2900,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2800,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2800,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2800,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2800,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2800,
      "stops":2,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Gold Class",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2800,
      "stops":3,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 


    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":0, 
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
     {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
  
  
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1200,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1200,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Lahore",
      "destination":"Islamabad",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1200,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Lahore",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":910,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":910,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1200,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1200,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1200,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Faisalabad",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1100,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
  
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1650,
      "stops":"0",
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1650,
      "stops":"0",
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1650,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1650,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1650,
      "stops":"0",
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1650,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1650,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1650,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1650,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1650,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1650,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
     {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1650,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1650,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1650,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1650,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":1650,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":1650,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":1650,
      "stops":1,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":1650,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":1650,
      "stops":"0",
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
  
    {
      "bus_type":"Luxury",
      "source":"Faisalabad",
      "destination":"Islamabad",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":1650,
      "stops":"0",
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2650,
      "stops":2,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2550,
      "stops":2,
      "available_seats":"0",
     "status":"Unavailable",
      "booking": false
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2450,
      "stops":2,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2450,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2450,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2450,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"13/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2450,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2450,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2450,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2450,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2450,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2450,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2550,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"14/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2450,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    },
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2550,
      "stops":2,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2550,
      "stops":2,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2550,
      "stops":2,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2550,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2450,
      "stops":1,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2450,
      "stops":1,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"15/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2450,
      "stops":1,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 
  
  
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"8:00",
      "arrival_time":"13:30",
      "fare":2550,
      "stops":1,
      "available_seats":43,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"9:30",
      "arrival_time":"15:30",
      "fare":2450,
      "stops":1,
      "available_seats":33,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"10:30",
      "arrival_time":"16:30",
      "fare":2450,
      "stops":1,
      "available_seats":24,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"12:30",
      "arrival_time":"18:30",
      "fare":2450,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"14:30",
      "arrival_time":"20:30",
      "fare":2450,
      "stops":2,
      "available_seats":44,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"16:30",
      "arrival_time":"22:30",
      "fare":2450,
      "stops":2,
      "available_seats":23,
      "status":"OK",
      "booking": true
    }, 
    {
      "bus_type":"Luxury",
      "source":"Islamabad",
      "destination":"Multan",
      "ddate":"16/02/2020",
      "departure_time":"18:30",
      "arrival_time":"00:30",
      "fare":2450,
      "stops":3,
      "available_seats":45,
      "status":"OK",
      "booking": true
    }, 



{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":0, "booking": false,
 "status":"Unavailable"
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
 {
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 





{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"15/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":810,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":810,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Lahore",
  "destination":"Islamabad",
  "ddate":"16/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":810,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
},
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"15/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Lahore",
  "ddate":"16/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
},


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
},
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"15/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":910,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":910,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":810,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":810,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":810,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Faisalabad",
  "ddate":"16/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":750,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
},


{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":950,
  "stops":"0",
  "available_seats":"0",
 "status":"Unavailable",
      "booking": false
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":950,
  "stops":"0",
  "available_seats":"0",
 "status":"Unavailable",
      "booking": false
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":950,
  "stops":"0",
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":950,
  "stops":"0",
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":950,
  "stops":"0",
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":950,
  "stops":"0",
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":950,
  "stops":"0",
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":950,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":950,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":950,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":950,
  "stops":"0",
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
 {
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":950,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":950,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":950,
  "stops":"0",
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":950,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":950,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":950,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":950,
  "stops":1,
  "available_seats":"0",
 "status":"Unavailable",
      "booking": false
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":950,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":950,
  "stops":"0",
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 

{
  "bus_type":"Normal",
  "source":"Faisalabad",
  "destination":"Islamabad",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":950,
  "stops":"0",
  "available_seats":45,
  "status":"OK",
      "booking": true
},

{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":1800,
  "stops":2,
  "available_seats":"0",
 "status":"Unavailable",
      "booking": false
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":1800,
  "stops":2,
  "available_seats":"0",
 "status":"Unavailable",
      "booking": false
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":1600,
  "stops":2,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":1600,
  "stops":2,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":1600,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":1600,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"13/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":1500,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 


{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":1800,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":1800,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":1600,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":1600,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":1600,
  "stops":1,
  "available_seats":44,
  "status":"OK",
  "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":1600,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"14/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":1500,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
},
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":1800,
  "stops":2,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":1800,
  "stops":2,
  "available_seats":33,
  "status":"OK",
  "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":1600,
  "stops":2,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":1600,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":1600,
  "stops":1,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":1600,
  "stops":1,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"15/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":1500,
  "stops":1,
  "available_seats":45,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"8:00",
  "arrival_time":"13:30",
  "fare":1800,
  "stops":1,
  "available_seats":43,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"9:30",
  "arrival_time":"15:30",
  "fare":1800,
  "stops":1,
  "available_seats":33,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"10:30",
  "arrival_time":"16:30",
  "fare":1600,
  "stops":1,
  "available_seats":24,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"12:30",
  "arrival_time":"18:30",
  "fare":1600,
  "stops":2,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"14:30",
  "arrival_time":"20:30",
  "fare":1600,
  "stops":2,
  "available_seats":44,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"16:30",
  "arrival_time":"22:30",
  "fare":1600,
  "stops":2,
  "available_seats":23,
  "status":"OK",
      "booking": true
}, 
{
  "bus_type":"Normal",
  "source":"Islamabad",
  "destination":"Multan",
  "ddate":"16/02/2020",
  "departure_time":"18:30",
  "arrival_time":"00:30",
  "fare":1500,
  "stops":3,
  "available_seats":45,
  "status":"OK",
  "booking": true
}
];
class Schedule extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      sortBusType: [],
      sortFare: [],
    displayButton:[]
    };
    this.onSortChange = this.onSortChange.bind(this);
    this.cleanSort = this.cleanSort.bind(this);
    this.showButton=this.showButton.bind(this);
  }

  onSortChange(bus_type, fare) {
    const sortBusType = [];
    const sortFare = [];
    for (let i = 0; i < this.state.sortBusType.length; i++) {
      if (this.state.sortBusType[i] !== bus_type) {
        sortBusType.push(this.state.sortBusType[i]);
        sortFare.push(this.state.sortFare[i]);  
      }
    }

    sortBusType.push(bus_type);
    sortFare.push(fare);
  
    this.setState({
      sortBusType,
       sortFare
      
    });
  }


  cleanSort() {
    this.setState({
      sortBusType: [],
      sortFare: [] 
    });
  }

// showButton(bus_type){
//     for (let i = 0; i < this.state.sortBusType.length; i++) {
//       if (this.state.sortBusType[i] !== bus_type) {
//               return(<button> book</button> );
//             }
//             else
//             {
//               return(<p>falseee</p> )
//             }
//           }
//   }

//--------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
// correct
// showButton(){
//   var seats;
//   var arr=[];
//   for (let i = 1; i < products.length; i++) {
//        seats=parseInt(products[i].available_seats);
//       var d = products[i].booking;
//           if ( seats >0) {
//                   return(<button> book {seats}</button> );
//                 }
//           else
//                 {
//                   return(<p>falseee</p> )
//                 }
//           }
//      }
//--------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
showButton(){
   var seats;

  for (let i = 0; i < products.length; i++) {
       seats=parseInt(products[i].available_seats);
     
          if ( seats >0) {
                  return(<button> book </button>);
                }
          else
                {
                  return(<button disabled> book </button>);
                }
          }       
   }
//-------------------------------------------------------------------------------------------------

// showButton(){
//   var seats;
//   const displayButton=[];
//   for (let i = 0; i < products.length; i++) {
//        seats=parseInt(products[i].available_seats);
//    //   var d = products[i].booking;
//           if ( seats >0) {
//             displayButton.push(<button >{i} tttttt</button>)
//                 }
//           else
//                 {
//                   displayButton.push(<button  disabled>{i}ffffffff</button>)
//                 }
//           }       
//           this.setState({
//             displayButton
            
//           });
//           return (
//             <div>
//               {displayButton} {/*Very important to wrap the buttons inside a div*/}
//             </div>
//           );
//     }


  // for (const seats in products) {
  //   if (seats.available_seats>0) {
  //     return(<button >ttttt </button>);
  //   }
  //   else 
  //     {
  //       return(<button disabled>fffffffff </button>); 
  //     }
  // }


//     this.props.products.map((available_seats, i) => {     
//     if(available_seats>0 )
//       {
//       return(<button key={i}>ttttt {available_seats}</button>);
//       }
//       else if (available_seats==0)
//       {
//         return(<button key={i} disabled>fffffffff {available_seats}</button>); 
//       } 
//  })}

    // for (const {available_seats, booking} of products)
    // {

    //   if(available_seats>0 && booking=='true')
    //   {
    //   return(<button>ttttt {available_seats}</button>);
    //   }
    //   else if (available_seats===0&& booking=='false')
    //   {
    //     return(<button disabled>fffffffff {available_seats}</button>); 
    //   }
    // }
        // products.map((available_seats,index)=>
        // {
        //   return available_seats.value>0 ?
        //   <button key={index} index={index}>tttttttt</button>
        //   :
        //   <button key={index} index={index} disabled>tttttttt</button>
        // }
        // )  }


  //   if (seats>0)
  // {
  //   return(<button>ttttt</button>);
  // }
  // else
  // {
  //   return(<button disabled>fffffffff</button>);
  // }
 



  render(){
  
  
    const options = {
      // reassign the multi sort list by an Array
      // if you dont want to control al the sort list, you can only assign the String to sort BusType and sort Fare
      sortName: "ddate",  //default sort column name
      sortOrder: "asc",
      sortBusType: this.state.sortBusType,
      sortFare: this.state.sortFare,
      onSortChange: this.onSortChange,
      showButton: this.showButton
    };

    return (
      <div style={{ padding: "20px" }}>
      <h1 className="h2">Schedule</h1>
     
        <div className="row" style={{ padding: "20px", marginLeft: "200px" }}>
            <div className="col-md-3" >
            <div className="source" >
                <h5><strong>Source</strong></h5>
                        <select class="form-control" id="local">
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Multan">Multan</option>
                  </select>
            </div>
            </div>
            <div className="col-md-2">

            </div>
             <div className="col-md-3">
             <div className="destination">
             <h5><strong>Destination</strong></h5>
                 <select class="form-control" id="locale">
                 <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>                  
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    </select>
                 </div>
                 </div>
                 <div className="col-md-1">

            </div>
                 <div className="col-md-3" >
                 <div className="btn btn-dark text-uppercase" mt-1 >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fab fa-teleram-plane" aria-hidden/>
                        &nbsp;Send
                        </div>
                      </div>
          </div>
          <br/>

          <ScheduleContainer>
        <button className='btn ben-default' onClick={ this.cleanSort }>Clean</button>
        {/* <p style={ { color: 'red' } }>sort:  sortBusType={ this.state.sortBusType }, sortFare={ this.state.sortFare }</p> */}
        <BootstrapTable data={ products } options={ options }  multiColumnSort={ 2 } pagination  >
          <TableHeaderColumn headerAlign="center" dataField='bus_type' dataAlign='left'  isKey={ true } dataSort={ true }>Bus Type</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" dataField='source' dataAlign='left ' dataSort={ true }>Source</TableHeaderColumn>
           <TableHeaderColumn headerAlign="center" dataField='destination' dataAlign='left' dataSort={ true }>Destination</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" dataField='ddate' dataAlign='left' dataSort={ true }>Date</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" width={'10%'} dataField='departure_time' dataAlign='left' dataSort={ true }>Departure Time</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" dataField='arrival_time' dataAlign='left' dataSort={ true }>Arrival Time</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" width={'6%'} dataField='stops' dataAlign='left' dataSort={ true }>Stops</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" width={'10%'} dataField='available_seats' dataAlign='left' dataSort={ true }>Available Seats</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" dataField='status' dataAlign='left' dataSort={ true }>Status</TableHeaderColumn>       
          <TableHeaderColumn headerAlign="center" dataField='fare' dataAlign='left'  dataSort={ true }>Fare</TableHeaderColumn>
          <TableHeaderColumn headerAlign="center" dataField="button" dataFormat={ this.showButton} >
            Booking</TableHeaderColumn>
          
             </BootstrapTable>

          </ScheduleContainer>
</div>
      );
    }
    }
    
export default Schedule;
const ScheduleContainer = styled.div`
.react-bootstrap-table-pagination-total{
  backgroundColor: '#ffff';
}

// .react-bootstrap-table-pagination-total{
//   backgroundColor: '#ffff';

// }


// `