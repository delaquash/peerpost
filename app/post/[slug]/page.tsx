"use client";

import Post from "@/app/components/Post";
import { PostType } from "@/app/types/Posts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type URL = {
  params: {
    slug: string;
  };
};

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`api/post/${slug}`);
  return response.data;
};

export default function PostDetails(url: URL) {
  const { data, isLoading } = useQuery<PostType[]>({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });

  if(isLoading) return "Loading..."
  return (
    <main>
      <Post
        avatar={""}
        name={""}
        postTitle={""}
        user={""}
        id={""}
        Comment={""}
      />
    </main>
  );
}
