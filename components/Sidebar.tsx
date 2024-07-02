'use client'

import { useContext } from 'react'
import Image from 'next/image'
import oplyIconColor from '@/components/oply-icon-color.svg'
import clsx from 'clsx'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import { HomeIcon, GearIcon, Cross2Icon } from '@radix-ui/react-icons'
import { UiContext } from '@/app/providers'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
]

interface SidebarProps {
  orgId: string
}

export default function Sidebar({ orgId }: SidebarProps) {
  const { sidebarOpen, setSidebarOpen } = useContext(UiContext)

  return (<>
    <Dialog className="relative z-50 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                <span className="sr-only">Close sidebar</span>
                <Cross2Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10">
            <nav className="flex flex-1 flex-col pt-10">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={`/${orgId}/${item.href}`}
                          className={clsx(
                            item.current
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-400 hover:text-white',
                            'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-zinc-400 hover:text-white"
                  >
                    <GearIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>

    {/* Static sidebar for desktop */}
    <div className="hidden lg:fixed lg:top-16 lg:pb-16 lg:h-full lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 border-r border-zinc-900">
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7 pt-10">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`/${orgId}/${item.href}`}
                      className={clsx(
                        item.current
                          ? 'bg-zinc-900 text-white'
                          : 'text-zinc-400 hover:text-white',
                        'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-zinc-400 hover:text-white"
              >
                <GearIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>)
}