import Link from "next/link";
import Image from "next/image";
import MainLinks from "../MainLinks";
import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
export default async function Header() {
  //login session info
  let session = await getServerSession(authOptions);
  let sayHello;
  if (session) {
    sayHello = "Welcome " + session.user.name;
  } else {
    sayHello = "";
  }
  return (
    <header>
      <div className="main-logo-container">
        <Link href={"/"} className="Link">
          <Image
            src="/images/logo.png"
            alt="DONGFLIX"
            className="main-logo"
            width={268}
            height={86}
          />
        </Link>
      </div>
      <h3 className="main-sayHello">{sayHello}</h3>
      <h3 className="main-sayHello">Here Your Today's Pick!</h3>
      <MainLinks session={session} />
    </header>
  );
}
