import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../pages/api/appProvider';

interface IProps {
}

const Layout: React.FC<IProps> = ({
    children,
}) => {
    const { pageTitle } = useAppContext();
    return (
        <>
            <Head>
                <title>{ pageTitle }</title>
            </Head>
            <header>
                 - Header -
            </header>
            { children }
            <footer>
                - Footer - 
            </footer>
            
        </>
    );
};

export default Layout;