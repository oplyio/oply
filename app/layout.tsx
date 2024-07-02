import type { Metadata } from "next"
import { Inter } from "next/font/google"
import clsx from "clsx"
import Providers from "@/app/providers"
import Header from "@/components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oply",
  description: "Kubernetes automation platform for developers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full bg-zinc-950 dark">
      <body className={clsx([inter.className, 'h-full'])}>
        <Providers>
          <div className="h-full">
            <Header />
            <div className="pt-16"> {/* Header height */}
              { children }
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
