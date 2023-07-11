import React, { createContext, useReducer } from 'react';

export const AppContext = createContext()



const initialState = {
    call:{
        remoteUser:null,
        isIncomming:false,
        connection:null,
        mystream:null,
        remoteStream:null,   
        isCalling:false,
    },
    user:null
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user:action.payload };
    case 'SET_INCOMING_CALL':
      return { ...state, call:{...state.call, isIncomming:true, remoteUser:action.payload} };

      case "SET_IS_CALLING":
        return {...state,call:{...state.call , isCalling:true}}

      case "CALL_REJECTED":
        return {...state,call:{...state.call,isCalling:false,}}

        case "SET_CALL_STARTED":
            return {...state , call:{...state.call,isCalling:false,remoteUser:action.payload}}
    default:
      throw new Error('Unknown action type');
  }
};


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{   call:state.call, user:state.user , dispatch }}>
      {children}
    </AppContext.Provider>
  );
};