import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
    href: string;
    name: string;
}

const PostLink: React.FC<IProps> = ({
    href,
    name
}) => {
    const router = useRouter();
    // console.log("router: ", router.pathname);
    return (
        <Link href={href}>
            <a className={`post-link-item ${router.pathname === href ? "active" : ""}`}>{ name }</a>
        </Link>
    );
}

export default PostLink;