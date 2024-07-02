import { db } from "@/db/client"
import { getOrganization } from "@/lib/models/organizationModel"
import Sidebar from "@/components/Sidebar"
import OrgProviders from "./orgProviders"

interface OrganizationLayoutProps {
  children: React.ReactNode
  params: {
    orgId: string
  }
}

export default async function OrganizationLayout({ params, children }: OrganizationLayoutProps) {
  const organization = await getOrganization(db, params.orgId)
  if (!organization) {
    throw new Error('Organization not found')
  }

  return (<>
    <OrgProviders organization={organization}>
      <Sidebar orgId={organization.id} />
      <div className="lg:pl-72">
        { children }
      </div>
    </OrgProviders>
  </>);
}