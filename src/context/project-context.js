import { createContext } from "react";

const projectContext = createContext({
  isModalOpen: false,
  chosenProject: null,
});

export default projectContext;
