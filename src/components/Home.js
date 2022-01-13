import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ limit = 12 }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const request = await fetch(
                process.env.REACT_APP_BASE_URL + "/posts"
            );
            if (request.ok) {
                const response = await request.json();
                if (limit) {
                    setPosts(response.slice(0, limit));
                } else {
                    setPosts(response);
                }
            }
        };
        loadPosts();
    }, [limit]);

    return (
        <main className="container my-3">
            {posts.length ? (
                <div class="row g-3">
                    {posts.map((p, i) => (
                        <div className="col" key={i}>
                            <div className="card h-100">
                                <div className="card-body h-100">
                                    <h5 className="card-title mb-auto">
                                        {p.title}
                                    </h5>
                                    <Link
                                        to={`/posts/${i}`}
                                        className="btn btn-primary mt-3"
                                    >
                                        See post
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </main>
    );
};

export default Home;
