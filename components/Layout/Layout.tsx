import React from 'react';
import Head from 'next/head';

interface IProps {
    title?: string;
}
const Layout: React.FC<IProps> = ({
    children,
    title
}) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
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