import { NextPage } from "next";
import { useAppContext } from "../api/appProvider";
import { useEffect } from "react";

const Index: NextPage<any> = () => {
    const { handlePageTitle } = useAppContext();

    useEffect(() => {
        handlePageTitle("Main Page");
    }, []);

    return (
        <div className={"container"}>
            <div className={"wrapper"}>
                <h1>Index</h1>
            </div>
        </div>
    );
};

export default Index;