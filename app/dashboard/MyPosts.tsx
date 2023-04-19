"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { AuthPosts } from "../types/authTypes";
import EditPost from "./EditPosts";

const fetchAuthPost = async () => {
  const res = await axios.get("/api/post/authPost");
  return res.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPost,
    queryKey: ["auth-posts"],
  });
  if (isLoading) return <h1>Post are loading....</h1>;
  return (
    <main>
      {data?.Post.map((post) => (
        <EditPost
          key={post.id}
          id={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.Comment}
        />
      ))}
    </main>
  );
}
