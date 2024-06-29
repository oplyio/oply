import { pgTable, text, primaryKey } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
import { users } from "./users";
import { organizations } from "./organizations";

export const usersRelations = relations(users, ({ many }) => ({
  usersToOrganizations: many(usersToOrganizations),
}));

export const organizationsRelations = relations(organizations, ({ many }) => ({
  usersToOrganizations: many(usersToOrganizations),
}));

export const usersToOrganizations = pgTable(
  'organizations_users',
  {
    userId: text('user_id')
      .notNull()
      .references(() => users.id),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.organizationId] }),
  }),
);

export const usersToOrganizationsRelations = relations(usersToOrganizations, ({ one }) => ({
  group: one(organizations, {
    fields: [usersToOrganizations.organizationId],
    references: [organizations.id],
  }),
  user: one(users, {
    fields: [usersToOrganizations.userId],
    references: [users.id],
  }),
}));