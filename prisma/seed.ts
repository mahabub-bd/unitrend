import { PrismaClient } from "@prisma/client";
import data from "../src/constants/data";

const prisma = new PrismaClient();

async function main() {
  await prisma.siteSetting.upsert({
    where: { key: "contact_phone" },
    update: {},
    create: { key: "contact_phone", value: "+8801894966260" },
  });
  await prisma.siteSetting.upsert({
    where: { key: "contact_email" },
    update: {},
    create: { key: "contact_email", value: "admin@unitrendinternational.com" },
  });
  await prisma.siteSetting.upsert({
    where: { key: "contact_email_secondary" },
    update: {},
    create: { key: "contact_email_secondary", value: "admin@unitrendbd.net" },
  });
  await prisma.siteSetting.upsert({
    where: { key: "contact_address" },
    update: {},
    create: { key: "contact_address", value: "178, Uttar Guran, Khilgaon, Dhaka-1219, Bangladesh" },
  });

  const principals = [
    ["DeriDesen Label", "principal1", "https://www.deridesen.com.tr"],
    ["Hengxin Label", "principal2", "https://www.hengxin-label.com"],
    ["Tuton Textile", "principal3", "https://www.tuton-textile.com"],
    ["Guangzhou Print Area", "principal4", "https://www.enyyink.com"],
    ["Impress Printing", "principal5", "https://www.impressprinting.com.hk"],
  ];
  for (const [index, item] of principals.entries()) {
    await prisma.principal.upsert({
      where: { id: `seed-principal-${index + 1}` },
      update: {},
      create: {
        id: `seed-principal-${index + 1}`,
        name: item[0],
        imageUrl: item[1],
        website: item[2],
        sortOrder: index,
      },
    });
  }

  for (let index = 1; index <= 16; index += 1) {
    await prisma.featuredProduct.upsert({
      where: { id: `seed-featured-${index}` },
      update: {},
      create: {
        id: `seed-featured-${index}`,
        title: `Featured product ${index}`,
        imageUrl: `product${index}`,
        sortOrder: index - 1,
      },
    });
  }

  const strategies = [
    ["Market", "We research what customers need in the current market.", "icon1"],
    ["Value", "We deliver value against our customers' needs and expectations.", "icon2"],
    ["Trust", "We earn trust by providing excellent service at every step.", "icon3"],
    ["Cost", "High-quality products at a fair, low cost for our customers.", "icon4"],
    ["Margins", "We respect our customers' budgets and keep our margins lean.", "icon5"],
  ];
  for (const [index, item] of strategies.entries()) {
    await prisma.strategy.upsert({
      where: { id: `seed-strategy-${index + 1}` },
      update: {},
      create: { id: `seed-strategy-${index + 1}`, title: item[0], subtitle: item[1], imageUrl: item[2], sortOrder: index },
    });
  }

  const blogPosts = [
    ["Choosing the right ink for textile label production", "choosing-textile-label-ink", "Printing technology", "A practical overview of solvent-base options, curing requirements and the factors that affect print consistency.", "product11.webp"],
    ["How to specify labels and ribbons for garment applications", "specifying-labels-ribbons", "Product guide", "Match label material, print method and finish to the garment use, wash requirements and brand presentation.", "product1.webp"],
    ["Understanding certified leather and alternative patches", "certified-leather-alternatives", "Sustainable materials", "A concise guide to OEKO-TEX, GRS, FSC, vegan PU and recycled options for responsible garment branding.", "hero.webp"],
  ];
  for (const [index, post] of blogPosts.entries()) {
    await prisma.blogPost.upsert({
      where: { slug: post[1] },
      update: {},
      create: {
        title: post[0],
        slug: post[1],
        category: post[2],
        excerpt: post[3],
        content: post[3],
        imageUrl: post[4],
        readTime: `${4 + index} min read`,
        published: true,
        publishedAt: new Date(2026, 9 - index, 15 - index),
      },
    });
  }

  const groups = [
    ["Textile Label Printing Ink (PFL)", "textile-label-pfl", data.labelPrintingInkPfl, true, false],
    ["Textile Label Printing Ink (SCREEN)", "textile-label-screen", data.labelPrintingInkScreen, true, false],
    ["Offset Printing Ink & Chemicals", "offset-printing-ink", data.offsetprintingink, true, false],
    ["Lace", "lace", data.lace, true, false],
    ["Textile Label Printing Ribbon", "textile-label-ribbon", data.labelprintingribbon, true, false],
    ["Textile Label Printing Machine", "textile-label-machine", data.labelprintingmachine, false, false],
    ["Leather Patch", "leather-patch", data.leatherpatch, true, true],
  ] as const;
  for (const [index, group] of groups.entries()) {
    const category = await prisma.productCategory.upsert({
      where: { slug: group[1] },
      update: {},
      create: {
        name: group[0],
        slug: group[1],
        showType: group[3],
        showBrand: group[4],
        sortOrder: index,
      },
    });
    for (const [rowIndex, row] of group[2].entries()) {
      await prisma.productItem.upsert({
        where: { id: `seed-${group[1]}-${rowIndex + 1}` },
        update: {},
        create: {
          id: `seed-${group[1]}-${rowIndex + 1}`,
          categoryId: category.id,
          name: row.productName,
          type: "type" in row && typeof row.type === "string" ? row.type : null,
          brand: "brand" in row && typeof row.brand === "string" ? row.brand : null,
          origin: row.origin,
          application: row.application,
          sortOrder: rowIndex,
        },
      });
    }
  }
}

main()
  .finally(async () => prisma.$disconnect());
