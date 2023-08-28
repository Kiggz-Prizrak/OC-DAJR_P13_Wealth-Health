import Modal from "../components/Modal";
import Form from "../components/Form";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <h1>HRnet</h1>
      <NavLink to="/employees-list">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <Form setModalIsOpen={setModalIsOpen} />
      {modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} /> : ""}
    </>
  );
};

export default Home;
