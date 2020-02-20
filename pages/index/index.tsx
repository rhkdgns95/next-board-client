import { useAppContext } from "../api/appProvider";
import { NextPage } from "next";
import Layout from "../../components/Layout";

const Index: NextPage<any> = () => {
    const { isLoggedIn, toggleLogin } = useAppContext();
    
    return (
        <Layout title={"Next Board | Main Page"}>
            <div>
                <h1>Index</h1>
                { isLoggedIn ? "Login Success" : "Login Please"}
                <button onClick={ () => toggleLogin() }>Login</button>
            </div>
        </Layout>
        
    );
};

export default Index;