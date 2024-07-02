'use client'

import { useContext, useEffect } from 'react'
import { UiContext } from "../providers"
import { type Organization } from '@/db/types'

interface OrgProvidersProps {
  children: React.ReactNode
  organization: Organization
}

export default function OrgProviders({ children, organization }: OrgProvidersProps) {
  const { setOrganization } = useContext(UiContext)

  useEffect(() => {
    setOrganization(organization)
  }, [setOrganization, organization])

  return <>{ children }</>
}