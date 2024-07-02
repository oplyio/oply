'use client'

import { useState, createContext } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { type Organization } from '@/db/types'

interface ProvidersProps {
  children: React.ReactNode,
}

export const UiContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: (open: boolean) => {},
  organization: null as Organization|null,
  setOrganization: (organization: Organization|null) => {},
});

export default function Providers({ children }: ProvidersProps) {
  const [organization, setOrganization] = useState<Organization|null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      variables: {
      }
    }}>
      <UiContext.Provider value={{ 
        sidebarOpen, 
        setSidebarOpen,
        organization,
        setOrganization,
      }}>
        {children}
      </UiContext.Provider>
    </ClerkProvider>
  )
}