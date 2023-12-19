
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Employees from './components/employees/Employees';
import About from './components/about/About';
import NavbarHeader from './components/navbar/Navbar';
import Nomatch from './components/no_match_url/Nomatch';
import AddEmployeeForm from './components/add_employee_form/AddEmployee';
import EmployeeSummary from './components/employee_summary/EmployeeSummary';
import Technews from './components/tech_news/Technews';


function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='employee' element={<Employees />}> </Route>
        <Route path='employee/add' element={<AddEmployeeForm />}></Route>
        <Route path='employee/:id' element={<EmployeeSummary />}></Route>
        <Route path='news' element={<Technews />}></Route>
        <Route path='*' element={<nomatch />}></Route>


      </Routes>
    </div>
  );
}

export default App;
