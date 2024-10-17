import { createContext, useState } from 'react';

export const LoginContext = createContext();

const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;