import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

export const authOptions= {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    pages: {
        signIn:'/signin'
    },
    callbacks: {
        async session({session,token,user}){
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();
            session.user.uid = token.sub;

            return session;
        }
    }
}

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};