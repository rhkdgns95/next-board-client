import App from "next/app";
import "../styles/global-styles.css";
import { NextRouter } from "next/router";
import AppProvider from "./api/appProvider";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { getCookieFromServer } from "../utils/getCookieFromServer";
import { getCookieFromBrowser } from "../utils/getCookieFromBrowser";

interface INextPageContext {
    Component: React.FC<any>;
    router: NextRouter;
    pageProps: any;
    isLoggedIn: boolean;
}

const MyApp = (props: INextPageContext) => {
    const { Component, pageProps, isLoggedIn } = props;
    console.log("isLoggedIn: ", isLoggedIn);
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
    const isServer: boolean = appContext.ctx.req;

    /**
     *  Nextjs - Cookie get
     *  
     *  nextjs에서의 쿠키를 가져오는 방법은
     *  2가지로 분리해서 생각 해야한다.
     *  [1] Server Render
     *  [2] Client Render
     */
    const jwt = isServer ? 
        getCookieFromServer('jwt', appContext.ctx.req) : 
        getCookieFromBrowser('jwt') || "";

    return { 
      ...appProps,
      isLoggedIn: Boolean(jwt)
    };
}

export default MyApp;