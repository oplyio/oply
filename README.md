## Development

Copy the `.env.example` file to `.env`

In the `.env` file configure the `DATABASE_URL` with a Postgres database (use Neon for simple/fast test database)

Setup auth with [Clerk](https://clerk.com)

Copy your Clerk keys to `.env.local` (retireve from API keys in Clerk dashboard)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=add_your_publishable_key
CLERK_SECRET_KEY=add_your_secret_key
```

Run migrations
```
npm run migrate
```

Whenever schema changes are made in `db/schema`, migrations will need to be generated using
```
npm run migrate:generate
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
