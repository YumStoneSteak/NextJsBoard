/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import MainLinks from "./list/MainLinks";
import Image from "next/image";
import Head from "next/head";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DongFlix",
  description: "DongFlix by LDH",
};

export default async function RootLayout({ children }) {
  //login session info
  let session = await getServerSession(authOptions);
  let userName;
  let sayHello;
  if (session) {
    sayHello = "Welcome " + session.user.name;
  } else {
    sayHello = "";
  }
  return (
    <html lang="en">
      <Head>
        <title>DongFlix</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={inter.className}>
        <header>
          <div className="main-logo-container">
            <Link href={"/"} className="Link">
              <Image
                src="/logo.png"
                alt="DONGFLIX"
                className="main-logo"
                width={268}
                height={86}
              />
            </Link>
          </div>
          <h3>{sayHello}</h3>
          <MainLinks session={session} />
        </header>

        {children}
        <hr />
        <h5 className="main-footer">
          Copyright ⓒ 2023 DONGFLIX. All rights reserved.
        </h5>
      </body>
    </html>
  );
}
