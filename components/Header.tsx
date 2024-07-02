'use client'

import { useContext } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { UserButton } from '@clerk/nextjs'
import { UiContext } from '@/app/providers'
import Icon from '@/components/Icon'

export default function Header() {
  const { setSidebarOpen, organization } = useContext(UiContext)

  return (<>
    <div className="fixed top-0 z-40 flex w-full h-16 shrink-0 items-center gap-x-4 bg-black border-b border-gray-900 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      { organization && (
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      <Icon />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          { organization && <a href="/organizations" className="text-zinc-300 text-sm font-semibold hover:underline">{ organization.name }</a> }
          <UserButton />
        </div>
      </div>
    </div>
  </>)
}