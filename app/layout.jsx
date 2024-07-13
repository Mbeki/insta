import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
// import SessionWrapper from "@/components/SessionWrapper";
import SessionProvider from "@/components/SessionProvider"
import UploadModal from "@/components/UploadModal";
// import { RecoilRoot } from "recoil";
import RecoilProvider from "@/components/RecoilProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram clone",
  description: "Made by Nixon",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
  
    <html lang="en" className="bg-gray-50 min-h-screen">
      
      <body className={inter.className}>
      <SessionProvider session={session}>
      <RecoilProvider>
        <Header/>
        {children}
        <UploadModal/>
        </RecoilProvider>
      </SessionProvider>
      </body>
      
     
    </html>
    
  
  );
}
