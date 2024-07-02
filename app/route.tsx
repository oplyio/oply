import { type NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/client";
import { createUser, getUser } from "@/lib/models/userModel";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const { userId } = auth();

  // Create authed user if they don't exist
  const user = await getUser(db, userId!);
  if (!user) {
    await createUser(db, { id: userId! });
  }

  // @todo go to users last chosen org

  return redirect('/organizations');
}