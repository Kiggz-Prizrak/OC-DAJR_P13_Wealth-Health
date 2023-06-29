import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Table from "../components/Table";

const EmployeesList = () => {
  const list = useSelector((state) => state.employees);
  console.log(list);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table list={list} />
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default EmployeesList;
