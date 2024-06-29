'use client'

import { useState, createContext } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

interface ProvidersProps {
  children: React.ReactNode,
}

export const UiContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: (open: boolean) => { },
});

export default function Providers({ children }: ProvidersProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <ClerkProvider>
      <UiContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
        {children}
      </UiContext.Provider>
    </ClerkProvider>
  )
}