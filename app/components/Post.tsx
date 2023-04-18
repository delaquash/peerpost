"use client";
import Image from "next/image";
import Link from "next/link";

export interface IPost {
  avatar: string;
  name: string;
  postTitle: string;
  user: string;
  id: string;
  Comment: string;
}

export default function Post({ avatar, name, postTitle, id, Comment }: IPost) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="gap-2 flex items-center">
        <Image
          className="rounded-full"
          alt="avatar"
          src={avatar}
          width={32}
          height={32}
        />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{postTitle}</p>
      </div>
      <div className="flex cursor-pointer items-center gap-4">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold text-gray-700">{Comment?.length}</p>
        </Link>
      </div>
    </div>
  );
}
