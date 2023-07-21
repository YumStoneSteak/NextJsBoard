/* eslint-disable @next/next/no-img-element */

import "../styles/normalize.css";
import "../styles/globals.css";
import "../styles/list.css";
import "../styles/responsive.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DongFlix",
  description: "DongFlix by LDH",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>DongFlix</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
