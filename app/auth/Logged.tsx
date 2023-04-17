// import Image from "next/image";
"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string;
};

export default function LoggedOut({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md"
      >
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image
          height={64}
          width={64}
          src={image}
          alt="dashboard"
          priority
          className="rounded-full w-14"
        />
      </Link>
    </li>
  );
}
