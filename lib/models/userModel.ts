import * as schema from "@/db/schema"
import * as dbTypes from "@/db/types"
import { auth } from "@clerk/nextjs/server"

export const createUser = async (db: dbTypes.Database, data: dbTypes.User): Promise<dbTypes.User> => {
  const results = await db.insert(schema.users).values(data).returning()
  return results[0]
}

export const getUser = async (db: dbTypes.Database, id: string): Promise<dbTypes.User | undefined> => {
  return await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id),
  })
}

export const getAuthedUser = async (db: dbTypes.Database): Promise<dbTypes.User | undefined> => {
  const { userId } = auth()
  return getUser(db, userId!)
}

export const getUserWithOrganizations = async (db: dbTypes.Database, id: string): Promise<dbTypes.UserWithOrganizations | null> => {
  const result = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id),
    with: {
      usersToOrganizations: {
        with: {
          organization: true,
        }
      }
    }
  });

  return result 
    ? result as dbTypes.UserWithOrganizations
    : null
}
