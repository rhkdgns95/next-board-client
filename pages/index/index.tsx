import { useAppContext } from "../api/appProvider";
import { NextPage } from "next";

const Index: NextPage<any> = () => {
    const { isLoggedIn, toggleLogin } = useAppContext();
    
    return (
        <div>
            <h1>Index</h1>
            { isLoggedIn ? "Login Success" : "Login Please"}
            <button onClick={ () => toggleLogin() }>Login</button>
        </div>
    );
};

export default Index;