import React from 'react';
import { useAppContext } from '../../pages/api/appProvider';
import PostLink from '../PostLink';

const Navbar = () => {
    const { isLoggedIn, toggleLogin } = useAppContext();
    return (
        <div className={"nav"}>
            <div className={"nav-wrapper"}>
                <div className={"post-link-group"}>
                    <PostLink href={"/"} name={"Home"}/>
                    <PostLink href={"/post"} name={"Post"}/>
                </div>
                <button onClick={toggleLogin}>
                { isLoggedIn ? "Logout" : "Login" }
                </button>
            </div>
        </div>
    );
};

export default Navbar;