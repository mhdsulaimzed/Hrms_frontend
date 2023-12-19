import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EmployeeSummary.css';
import { Link } from 'react-router-dom';




function EmployeeSummary() {
  const params = useParams();
  const empid = parseInt(params.id);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState(null);
  

  const fetchData = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:5000/employee/${id}`);
      const jsonData = await response.json();
      const fetchedEmployee = jsonData.user || null;
      setEmployee(fetchedEmployee);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(empid);
  }, [empid]);

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleReasonChange = (value) => {
    setReason(value);
  };

  async function handleLeaveSubmit(id) {
    const leave_data = { date, reason };
    try {
      const response = await fetch(`http://localhost:5000/leave/${id}`, {
        method: 'POST',
        body: JSON.stringify(leave_data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const responseData = await response.json();
        alert(`${responseData.message}`);
      } else {
        const responseData2 = await response.json();
        alert(`${responseData2.message}`);
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/employee")
    console.log(id,"hey");
  }

  return (
    <div>
      <div className="container-lg mt-3">
        <div className="row">
          <div className="col-xl-4">
            <button onClick={() => navigate(-1)} className="btn form-control btn-primary mt-2" type="button">
              Back
            </button>

            <div className="card mt-2 mb-4 mb-xl-0">
              <div className="card-body text-center">
                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
              </div>
            </div>

            {/* leave form */}
            <div className="card mb-4 mb-xl-0 mt-3">
              <div className="card-header">Add Leave</div>
              <div className="card-body text-center">
                <form onSubmit={(e) => { e.preventDefault(); handleLeaveSubmit(employee.id); }} method="post">
                  <input
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="form-control"
                    name="date"
                    id="date"
                    type="date"
                    placeholder="Date"
                  />
                  <br />
                  <textarea
                    onChange={(e) => handleReasonChange(e.target.value)}
                    className="form-control"
                    name="reason"
                    id="reason"
                    type="text"
                    placeholder="Reason"
                  ></textarea>
                  <button className="btn btn-primary mt-3" type="submit">
                    Add Leave
                  </button>
                </form>
              </div>
            </div>
            <Link to={`/employee/${employee.id -1}`} className="btn btn-danger px-auto mt-3 form-control">Prev</Link>
            <Link to={`/employee/${employee.id +1}`} className="btn btn-danger form-control mt-3 px-auto  ">Next</Link>

           
          </div>
          <div className="col-xl-8">
            {/* employee summary */}
            <div className="card mb-4">
              <div className="card-header">Employee Details</div>
              <div className="card-body">
                
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">First name</label>
                      <input className="form-control" id="fname" type="text" value={employee.fname} />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Last name</label>
                      <input className="form-control" id="lname" type="text" value={employee.lname} />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Designation</label>
                      <input className="form-control" id="title" type="text" value={employee.title} />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Employee ID</label>
                      <input className="form-control" id="emp_id" type="text" value={employee.id} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1">Email address</label>
                    <input className="form-control" id="email" type="email" value={employee.email} />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Phone number</label>
                      <input className="form-control" id="phone" type="tel" value={employee.phone} />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Leave Taken</label>
                      <input className="form-control" id="leave_taken" type="text" value={employee.leave_taken} />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Maximum Leaves</label>
                      <input readOnly className="form-control" id="maximum_leaves" value={employee.max_leaves} />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1 ">Leave Remaining</label>
                      <input readOnly className="form-control" id="leave_remaining" type="text" value={employee.max_leaves - employee.leave_taken} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSummary;
