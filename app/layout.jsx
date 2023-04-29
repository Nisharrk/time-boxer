import "./globals.css";
import Nav from "./components/Nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Time Boxer",
  description: "Made with ❤️ by 🦈",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`mx-4 sm:mx-2 md:mx-24 lg:mx-48 xl:mx-72 py-8 px-3 text-gray-200 bg-black ${roboto.className}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
