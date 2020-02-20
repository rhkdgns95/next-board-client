import App from "next/app";
import { NextRouter } from "next/router";
import AppProvider from "./api/appProvider";

interface INextPageContext {
    Component: React.FC<any>;
    router: NextRouter;
    pageProps: any;
}

const MyApp = (props: INextPageContext) => {
    const { Component, pageProps } = props;
    return (
        <AppProvider>
            <Component { ...pageProps }/>
        </AppProvider>
    );
};

MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    // console.log("_app.js getInitialProps appContext: ", appContext);
    const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
}

export default MyApp;