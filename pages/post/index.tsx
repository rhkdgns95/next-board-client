import { NextPage } from "next";
import { useAppContext } from "../api/appProvider";
import { useEffect } from "react";

interface IProps {
    posts: Array<IPost>;
}

interface IPost {
    id: number;
    name: string;
};
const Posts: Array<IPost> = [
    {
        id: 1,
        name: "Lee - Min"
    },
    {
        id: 2,
        name: "Kim - Gun"
    },
    {
        id: 3,
        name: "Hwang - Chung"
    },
    {
        id: 4,
        name: "Man - woo"
    },
    {
        id: 5,
        name: "Chang - Su"
    }
];

const Post: NextPage<IProps> = ({
    posts
}) => {
    const { handlePageTitle } = useAppContext();
    
    useEffect(() => {
        handlePageTitle('Posts');
    }, []);

    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                {
                    posts.map((item, key) => 
                        <p key={key}>{item.id} - {item.name}</p>
                    )
                }
            </div>
            <style jsx>{
                `
                    background-color: #dfdfdf;
                `
            }
            </style>
        </div>
    );
}

Post.getInitialProps = async () => {
    console.log("Post.getInitialProps: ", );
    return {
        posts: Posts
    };
};

export default Post;