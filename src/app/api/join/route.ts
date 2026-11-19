import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const joinSchema = z.object({ email: z.string().trim().email().max(254) });

export async function POST(request: Request) {
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }
  const parsed = joinSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  try {
    await db.contactEnquiry.create({ data: {
      name: "Run club interest",
      email: parsed.data.email.toLowerCase(),
      subject: "Krantijyoti Women’s Run information request",
      message: "Visitor requested information about Krantijyoti Women’s Run 2027.",
    } });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We couldn’t save your request. Please try again shortly." }, { status: 503 });
  }
}
