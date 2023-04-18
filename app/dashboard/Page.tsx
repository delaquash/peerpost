import { authOptions } from "@/pages/api/post/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main>
      <h1 className="font-bold text-2xl">Welcome back {session?.user?.name}</h1>
    </main>
  );
}
