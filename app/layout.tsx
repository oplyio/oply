import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Providers from "@/app/providers";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oply",
  description: "Cloud automation platform for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={clsx([inter.className, 'h-full'])}>
        <Providers>

          <div>
            <Sidebar />

            <div className="lg:pl-72">
              <Header />

              <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>

          </div>

        </Providers>
      </body>
    </html>
  );
}
