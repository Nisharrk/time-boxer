"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string;
};

function Logged({ image }: User) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function handleSignOut() {
    try {
      const response = await signOut();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <li className="flex gap-4 items-center">
      <button
        onClick={handleSignOut}
        className="text-sm bg-amber-500 hover:shadow-md hover:shadow-gray-100 text-white py-2 px-6 rounded-md disabled:opacity-25"
      >
        Sign Out
      </button>
      <Link href={"/"}>
        <Image
          className="w-14 rounded-full"
          width={64}
          height={64}
          src={image}
          alt=""
        />
      </Link>
    </li>
  );
}

export default Logged;
