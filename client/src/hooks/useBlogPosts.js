import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {posts, isError, isLoading};
}

export default useBlogPosts;
