import { auth } from "@clerk/nextjs/server"
import { getUserWithOrganizations } from "@/lib/models/userModel"
import { db } from "@/db/client"
import { ChevronRightIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { HeadingOne } from "@/components/ui/headings"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { redirect } from "next/navigation"

export default async function Organizations() {
  const { userId } = auth()
  const user = await getUserWithOrganizations(db, userId!)

  const orgs = (user?.usersToOrganizations || []).map(pivot => {
    return pivot.organization
  })

  if (orgs.length === 0) {
    return redirect('/organizations/create?first=true')
  }

  return (<>
    <div className="w-full max-w-lg mx-auto mt-12">
      <HeadingOne className="mb-8">Organizations</HeadingOne>
      <Card>
        <CardContent>
          { orgs.map(org => (
            <a key={org.id} href={`/${org.id}`} className="flex items-center justify-between group py-3 rounded-sm border-b border-zinc-900">
              <div className="flex items-center gap-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-zinc-500 dark:bg-zinc-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  { org.name[0] }
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-indigo-400">{ org.name }</h3>
                </div>
              </div>
              <div className="flex items-center gap-x-4 group-hover:text-zinc-400">
                <ChevronRightIcon />
              </div>
            </a>
          )) }
        </CardContent>

        <CardFooter>
          <a href="/organizations/create" className="flex items-center space-x-1 text-sm text-zinc-300 hover:text-zinc-400">
            <PlusCircledIcon className="w-4 h-4" /> 
            <span>New organization</span>
          </a>
        </CardFooter>
      </Card>
    </div>
  </>)
}