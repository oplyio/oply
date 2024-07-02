import * as schema from '@/db/schema'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

export type Database = PostgresJsDatabase<typeof schema>

export type User = typeof schema.users.$inferSelect
export type UserWithOrganizations = User & {
  usersToOrganizations: UsersToOrganizationsWithRelations[]
}

export type Organization = typeof schema.organizations.$inferSelect
export type OrganizationWithUsers = Organization & {
  usersToOrganizations: UsersToOrganizationsWithRelations[]
}

export type UsersToOrganizations = typeof schema.usersToOrganizations.$inferSelect
export type UsersToOrganizationsWithRelations = UsersToOrganizations & {
  organization: Organization
  user: User
}