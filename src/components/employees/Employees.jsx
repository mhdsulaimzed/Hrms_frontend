import React from 'react'
import EmployeeCard from '../employee_det/SingleEmployee'
import { useState, useEffect } from 'react';


function Employees() {
  const [employees, setEmployees] = useState([]);
  const [employee_clicked, setClickedEmp] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const jsonData = await response.json();


      const employeeArray = jsonData.users || [];

      setEmployees(employeeArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(data) {
    setClickedEmp(data)
    console.log(employee_clicked);

  }
  return (
    <div>
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light" id="list_bar">Empyees Detail</div>
          <div id="side_bar" className="list-group list-group-flush nav-collspse collape">




            {employees.map((data, index) => (
              <a className="nav-link list-group-item list-group-item-action list-group-item-light p-3" key={index} onClick={() => handleClick(data)}>
                {data.fname} {data.lname}
              </a>
            ))}
          </div>

        </div>
        

<div className="container-fluid " style={{ backgroundColor:  '#92A8D1' }}>
  <div className="row" style={{position: 'fixed', top: '50%', width: '90%'}}>
    <div className="col-2"></div>
    <div className="col-8">
      {employee_clicked && <EmployeeCard data={employee_clicked} />}
    </div>
    <div className="col-2"></div>
  </div>
</div>
      </div>

    </div>
  )
}

export default Employees
