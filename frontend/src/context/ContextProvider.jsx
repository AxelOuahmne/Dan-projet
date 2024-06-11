import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "axel test",
        status: "admin"
    });
    const [userToken, setUserToken] = useState();
    
    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useUserStateContext = () => useContext(StateContext);



