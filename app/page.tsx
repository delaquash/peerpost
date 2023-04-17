"use client"
import axios from "axios";
import AddPost from "./components/addPosts";
import { useQuery } from "react-query";


const allPost = async() => {
  const response = await axios.get('/api/post/getPost')
  return response.data
}

export default function Home() {
  const { data, error, isLoading} = useQuery({
    queryFn: allPost,
    queryKey: ["posts"]
  })
if(error) return error
if(isLoading) return "Loading..."
  return (
    <main>
      <h1>Welcome</h1>
      <AddPost />
    </main>
  );
}
