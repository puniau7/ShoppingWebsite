import React, { createContext, useContext, useReducer } from "react";

// set up data layer
// we need this to track the basket

//this IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/** refers to APP being passed */}
  </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
