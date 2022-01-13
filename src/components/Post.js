import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState({
        title: "",
        body: "",
        userId: 0,
    });
    const [author, setAuthor] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const loadPost = async () => {
            const post_request = await fetch(
                `${process.env.REACT_APP_BASE_URL}/posts/${id}`
            );

            if (post_request.ok) {
                const post_response = await post_request.json();
                setPost(post_response);

                const author_request = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/users/${post.userId}`
                );
                if (author_request.ok) {
                    const author_response = await author_request.json();
                    setAuthor(author_response);
                }
            }
        };
        loadPost();
    }, [post]);

    return (
        <main className="container my-3">
            <div className="card h-100">
                <div className="card-body h-100">
                    <h5 className="card-title mb-auto">{post.title}</h5>
                    {author && (
                        <h6 className="card-subtitle mb-2 text-muted">
                            A post by {author.name}
                        </h6>
                    )}
                    {post.body.split("\n").map((p, i) => (
                        <p key={i} className="card-text">
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Post;
