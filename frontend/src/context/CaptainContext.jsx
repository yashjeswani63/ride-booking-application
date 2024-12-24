import { createContext, useState, useEffect } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  useEffect(() => {
    if (captain !== null && captain !== undefined) {
      console.log(captain);

      localStorage.setItem("captainfirstname", captain.fullname.firstname);
      localStorage.setItem("captainlastname", captain.fullname.lastname);
      localStorage.setItem("_id", captain._id);
    }
  }, [captain]);

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
