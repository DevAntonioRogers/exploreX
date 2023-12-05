import NextAuth, {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prismadb"


export const authOptions: AuthOptions = ({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
})

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}