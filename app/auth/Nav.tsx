
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LoggedOut from "./Logged";
import Login from "./Login";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Send it</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <LoggedOut image={session.user.image || ""} />}
      </ul>
    </nav>
  );
}