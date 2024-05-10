import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Homepage from "@/components/Homepage";
import Additional from "@/components/Additional";
import UseFetch from "@/constants/useFetch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
     title: "Create Next App",
     description: "Generated by create next app",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
            <body className={`${inter.className} `}>

                    <div className="mx-[180px]">
                         <Navbar />
                    </div>
                    <div className="bg-gray-100">
                      <div className="mx-[180px]">

                    <Additional/>
                      </div>
                         <div className="mx-[180px] flex ">
                              <Aside />
                              <div className="ml-6">
                                  <UseFetch/>
                              </div>
                         </div>
                    </div>
               </body>
          </html>
     );
}
