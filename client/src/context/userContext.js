const { createContext } = require("react");

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    return (
        <children />
    )
}