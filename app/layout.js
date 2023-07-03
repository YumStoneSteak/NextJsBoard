/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import MainLinks from "./list/MainLinks";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DongFlix",
  description: "DongFlix by LDH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>DongFlix</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={inter.className}>
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

        <MainLinks />
        {children}
        <hr />
        <h5 className="main-footer">
          Copyright ⓒ 2023 DONGFLIX. All rights reserved.
        </h5>
      </body>
    </html>
  );
}
