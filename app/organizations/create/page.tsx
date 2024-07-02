import { SubmitButton } from "@/components/ui/button";
import { HeadingOne } from "@/components/ui/headings";
import { Input } from "@/components/ui/input";
import { associateUserToOrganization, createOrganization } from "@/lib/models/organizationModel";
import { getAuthedUser } from "@/lib/models/userModel";
import { redirect } from "next/navigation";
import { db } from "@/db/client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

interface CreateOrganizationProps {
  searchParams: {
    first?: boolean
  }
}

export default function CreateOrganization({ searchParams }: CreateOrganizationProps) {
  async function onCreate(formData: FormData) {
    'use server'

    const user = await getAuthedUser(db)
    const name = formData.get('name')?.toString()

    const organization = await db.transaction(async (tx) => {
      const org = await createOrganization(tx, name!)
      await associateUserToOrganization(tx, org.id, user!.id)
      return org
    })

    redirect(`/${organization.id}`)
  }

  return (
    <div className="w-full max-w-lg mx-auto mt-12">
      <form action={onCreate}>
        <HeadingOne className="mb-12">New organization</HeadingOne>

        { searchParams.first && (
          <Alert className="mb-8" variant="info">
            <RocketIcon className="w-6 h-6 text-yellow-500" />
            <AlertTitle>Let's go!</AlertTitle>
            <AlertDescription>Create your first organization to get started.</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center gap-x-4 mb-4">
          <Input type="text" name="name" placeholder="Acme Inc." required />
          <SubmitButton variant="primary" type="submit">Create</SubmitButton>
        </div>
      </form>
    </div>
  );
}