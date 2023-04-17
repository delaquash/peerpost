
import { Roboto } from "next/font/google";
import Nav from "./auth/Nav";
import QueryWrapper from "./auth/QueryWrapper";
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "PeerPost",
  description: "Welcome to a world where you can psot to peers unhindered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> */}
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
