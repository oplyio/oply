import 'dotenv/config';
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator'

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: './db/migrations' }).then(() => {
  console.log('Done!');
}).finally(() => {
  migrationClient.end();
});
