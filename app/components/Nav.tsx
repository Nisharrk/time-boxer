import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between item-center py-8 pb-4 px-3 border-b-2 border-t-2 border-gray-200 rounded-lg">
      <Link href={"/"}>
        <h1 className="font-bold text-3xl">TimeBoxer⌛</h1>
      </Link>
      <ul className="flex flex-col items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
};

export default Nav;
