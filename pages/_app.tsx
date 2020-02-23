import App from "next/app";
import "../styles/global-styles.css";
import { NextRouter } from "next/router";
import AppProvider from "./api/appProvider";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

interface INextPageContext {
    Component: React.FC<any>;
    router: NextRouter;
    pageProps: any;
}

const MyApp = (props: INextPageContext) => {
    const { Component, pageProps } = props;
    return (
        <AppProvider>
            <Layout>
                <Navbar/>
                <Component { ...pageProps }/>
            </Layout>
        </AppProvider>
    );
};

MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    // console.log("_app.js getInitialProps appContext: ", appContext);
    const appProps = await App.getInitialProps(appContext);
    console.log("MyApp.getInitialProps");
    if(appContext.ctx.req) {
        // console.log("appContext.ctx.req: ", appContext.ctx.req.headers);
    }
  return { ...appProps };
}

export default MyApp;