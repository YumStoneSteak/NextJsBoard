import Link from "next/link";
import Image from "next/image";
import MainLinks from "../MainLinks";
import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Header() {
  let session = await getServerSession(authOptions);

  const sayGreeting = () => {
    let name = "";
    let guestName = [
      "띵작을 찾아 헤메시는 선생",
      "영화학 교수",
      "봉준호 감독",
      "이동욱 닮은 선생",
    ];

    let randomArrayValue = (array) =>
      array[Math.floor(Math.random() * array.length)];

    if (session) {
      name = session.user.name;
    } else {
      name = randomArrayValue(guestName);
    }

    let greeting = [
      `${name}님! 오늘 영화 한 편 어떠세요?`,
      `${name}님을 위한 오늘의 추천 영화가 여기 있어요!`,
      `${name}님이 좋아할 만한 영화가 여기 있어요!`,
      `${name}님의 최애 예정 영화 리스트`,
      `${name}님의 원픽 예정 영화 리스트`,
      `${name} 추천 죽기전에 봐야할 영화 101편`,
    ];
    return randomArrayValue(greeting);
  };

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
      <h3 className="main-greeting">{sayGreeting()}</h3>
      <MainLinks session={session} />
    </header>
  );
}
