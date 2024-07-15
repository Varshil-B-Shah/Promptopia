"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filterPosts, setfilterPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, [posts]);

  useEffect(() => {
    const filteredposts =  posts.filter((p) => {
      return (
        searchText === "" ||
        p.creator.username.includes(searchText) ||
        p.tag.includes(searchText) ||
        p.prompt.includes(searchText)
      );
    });
    setfilterPosts(filteredposts);
  }, [searchText, posts]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer:"
        />
      </form>

      <PromptCardList data={filterPosts} handleTagClick={(tagText) => setSearchText(tagText)} />
    </section>
  );
};

export default Feed;
