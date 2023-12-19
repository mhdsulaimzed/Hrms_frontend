import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


const EmployeeCard = (props) => {
  const empid = props.data.id
  // const[id,setId]=useState(0);
  // setId(empid)
  console.log(empid);
  return (
    <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
      <div className="row g-0">
        <div className="col-md-4 gradient-custom text-center text-white"
          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
          <img src="https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_1280.png"
            alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
          <h5>{props.data.fname} {props.data.lname}</h5>
          <p>{props.data.title}</p>
          <i className="far fa-edit mb-5"></i>
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <h6>Employee Details</h6>
            <hr className="mt-0 mb-4" />
            <div className="row pt-1">
              <div className="col-2 mb-3">
                <h6>ID</h6>
                <p className="text-muted">{props.data.id}</p>
              </div>
              <div className="col-5 mb-3">
                <h6>Email</h6>
                <p className="text-muted">{props.data.email}</p>
              </div>
              <div className="col-5 mb-3">
                <h6>Phone</h6>
                <p className="text-muted">{props.data.phone}</p>
              </div>
            </div>
            
            
            <div className="row pt-1 d-flex justify-content-around">
              <div className="col-4 text-center">
                
              </div>
              <div className="col-4 text-center">
                <Link to={`/employee/${empid}`} className="btn btn-outline-danger">Employee Summary</Link>
              </div>
              <div className="col-4 text-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
