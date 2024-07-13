"use client";

import Profile from "@components/Profile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const userDetails = useParams();
  console.log(userDetails);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userDetails?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (userDetails?.id) fetchPosts();
  }, []);

  console.log(userPosts);
  return (
    <Profile
      name={userDetails.name}
      desc={`Welcome to ${userDetails.name}'s personalized profile page. Explore ${userDetails.name}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
