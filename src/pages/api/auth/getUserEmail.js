import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

//only works at ssr, not api or csr
export default async function getUserEmail() {
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  return userEmail;
}
