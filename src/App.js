import React, { Fragment, useState } from "react";
import "./App.scss";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import About from "./containers/About";
import ModalContent from "./components/ModalContent";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenProject, setChosenProject] = useState(null);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const selectedProject = (project) => setChosenProject(project);

  return (
    <Fragment>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <ModalContent project={chosenProject} closeModal={closeModal} />
      </Modal>
      <Home />
      <About />
      <Projects openModal={openModal} selectedProject={selectedProject} />
      <Contact />
    </Fragment>
  );
}

export default React.memo(App);
