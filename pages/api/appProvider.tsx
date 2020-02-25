import { createContext, useContext, useState } from "react";

interface IContext {
    isLoggedIn: boolean;
    pageTitle: string;
    handlePageTitle: (newTitle: string) => any;
    toggleLogin: () => any;
}

const InitContext: IContext = {
    isLoggedIn: false,
    pageTitle: "",
    handlePageTitle: () => {},
    toggleLogin: () => {}
};

const AppContext = createContext<IContext>(InitContext);

const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [pageTitle, setPageTitle] = useState<string>("Next Board");
    
    const handlePageTitle = (newTitle: string) => {
        setPageTitle(`Next Board | ${newTitle}`);
    }

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return {
        value: {
            isLoggedIn,
            toggleLogin,
            pageTitle,
            handlePageTitle
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