import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.siteSettings.upsert({
    where: { id: "site" },
    create: { id: "site", siteName: "Bajaj Pune Marathon", currency: "INR" },
    update: {},
  });
}

main().finally(async () => db.$disconnect());
