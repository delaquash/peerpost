"use client";
import axios from "axios";
import { useQuery } from "react-query";
import Post, { IPost } from "./components/Post";
import AddPost from "./components/addPosts";

const allPost = async () => {
  const response = await axios.get("/api/post/getPost");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPost,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading...";
  return (
    <main>
      <AddPost />
      {data?.map((post: IPost) => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          user={""}
          id={post.id}
        />
      ))}
    </main>
  );
}
