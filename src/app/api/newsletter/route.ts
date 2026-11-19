import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const emailSchema = z.object({ email: z.string().trim().email().max(254) });

export async function POST(request: Request) {
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }
  const parsed = emailSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  try {
    await db.newsletterSubscriber.upsert({
      where: { email: parsed.data.email.toLowerCase() },
      create: { email: parsed.data.email.toLowerCase() },
      update: { active: true },
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Newsletter sign-up is temporarily unavailable." }, { status: 503 });
  }
}
