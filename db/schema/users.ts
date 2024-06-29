import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
});
