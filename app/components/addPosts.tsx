"use client";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const queryClient = useQueryClient();

  let toastPostID: string;
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post("/api/posts/addPost", {
        title,
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostID });
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post has been made 🔥", { id: toastPostID });
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    toastPostID = toast.loading("Creating your post", { id: toastPostID });
    mutate(title);
  };
  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={submitPost}
          name="title"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
          placeholder="What's on your mind"
          value={title}
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          type="submit"
          className="text-sm bg-teal-500 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
