import React, { useEffect, useState } from "react";
import Button from "./Button";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
        setFilteredPosts(data.slice(0, POSTS_PER_PAGE));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle pagination
  const loadMore = () => {
    const nextPage = page + 1;
    const nextPosts = posts.slice(0, nextPage * POSTS_PER_PAGE);
    setFilteredPosts(nextPosts);
    setPage(nextPage);
  };

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    if (!term) {
      setFilteredPosts(posts.slice(0, page * POSTS_PER_PAGE));
    } else {
      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(term)
      );
      setFilteredPosts(results);
    }
  };

  if (loading) return <p className="text-center py-6">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-base-100 shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">API Posts</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={handleSearch}
        className="input input-bordered w-full mb-4"
      />

      {/* Grid layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card bg-base-200 shadow-md p-4">
            <h3 className="font-semibold mb-2 text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredPosts.length < posts.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore} variant="primary">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiData;
