import * as schema from "@/db/schema"
import * as dbTypes from "@/db/types"

export const createOrganization = async (db: dbTypes.Database, name: string): Promise<dbTypes.Organization> => {
  const results = await db.insert(schema.organizations).values({ name }).returning()
  return results[0]
} 

export const associateUserToOrganization = async (db: dbTypes.Database, organizationId: string, userId: string): Promise<dbTypes.UsersToOrganizations> => {
  const results = await db.insert(schema.usersToOrganizations).values({ organizationId, userId }).returning()
  return results[0]
}

export const getOrganization = async (db: dbTypes.Database, id: string): Promise<dbTypes.Organization | undefined> => {
  return await db.query.organizations.findFirst({
    where: (organizations, { eq }) => eq(organizations.id, id),
  })
}