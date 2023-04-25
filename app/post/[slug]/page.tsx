"use client";

import Post from "@/app/components/Post";
import AddComment from "@/app/components/addComment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { Key, ReactNode } from "react";

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
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });

  if (isLoading) return "Loading...";
  return (
    <main>
      <Post
        avatar={data.user.image}
        name={data.user.name}
        postTitle={data.title}
        id={data.id}
        comments={data.Comment}
      />
      <AddComment id={data?.id} />
      {data?.Comment?.map(
        (comment: {
          [x: string]: ReactNode;
          user: any;
          message: ReactNode;
          id: Key | null | undefined;
        }) => (
          <div className="my-6 bg-white p-8 rounded-md" key={comment.id}>
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src={comment.user?.image}
                alt="avatar"
              />
              <h3 className="font-bold">{comment?.user?.name}</h3>
              <h2 className="text-sm">{comment.createdAt}</h2>
            </div>
            <div className="py-4">{comment.message}</div>
          </div>
        )
      )}
    </main>
  );
}
