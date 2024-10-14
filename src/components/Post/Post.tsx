import { useEffect, useState } from 'react';
import * as React from 'react';

interface PostData {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

const Post: React.FC = () => {
  const url = 'http://146.185.154.90:8000/messages';
  const [posts, setPosts] = useState<PostData[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await fetch(url);
      const data: PostData[] = await response.json();



      setPosts(data);

    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {

    getAllPosts();

    const intervalId = setInterval(() => {
      getAllPosts();
    }, 2000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex flex-column-reverse">
      {posts.map((post) => (
        <div key={post._id} className="mb-3 border p-4 d-grid align-items-center justify-content-start">
          <div>
            <strong className="me-2">{post.author}</strong>
            <span>{new Date(post.datetime).toLocaleString()}</span>
          </div>
          <p className="text-start">{post.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
