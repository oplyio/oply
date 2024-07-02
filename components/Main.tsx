'use client'

import { useContext } from "react";
import clsx from "clsx";
import Header from "@/components/Header";
import { UiContext } from "@/app/providers";

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  const { orgId } = useContext(UiContext)

  return (
    <div className={clsx([
      orgId && "lg:pl-72",
    ])}>
      <Header />

      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}