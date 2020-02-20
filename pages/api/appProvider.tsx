import { createContext, useContext, useState } from "react";

interface IContext {
    isLoggedIn: boolean;
    toggleLogin: () => any;
}

const InitContext: IContext = {
    isLoggedIn: false,
    toggleLogin: () => {}
};

const AppContext = createContext<IContext>(InitContext);

const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return {
        value: {
            isLoggedIn,
            toggleLogin
        }
    };
};

const AppProvider: React.FC<any> = ({
    children
}) => {
    return (
        <AppContext.Provider { ...useFetch() }>
            {
                children
            }
        </AppContext.Provider>
    )
};

export { useAppContext };
export default AppProvider;