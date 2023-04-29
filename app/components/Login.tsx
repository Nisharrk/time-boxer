"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function handleSignIn() {
    try {
      const response = await signIn();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <li className="list-none">
      <button
        onClick={handleSignIn}
        className="text-sm bg-amber-500 text-white py-2 px-6 rounded-md hover:shadow-md hover:shadow-gray-100 disabled:opacity-25"
      >
        Sign In
      </button>
    </li>
  );
}

export default Login;
