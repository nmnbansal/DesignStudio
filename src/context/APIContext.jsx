import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FeedsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [feeds, setFeeds] = useState([]);

  return (
    <FeedsContext.Provider value={{ feeds, setFeeds }}>
      {children}
    </FeedsContext.Provider>
  );
};


ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
