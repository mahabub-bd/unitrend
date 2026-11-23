import type { ProductRow } from "@/components/Products/ProductsTable";

/** Stable, human-readable id/anchor for a category heading. */
export const slugifyCategory = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Flatten a row into a single lowercase string used for search matching. */
export const searchableRow = (row: ProductRow) =>
  [row.productName, row.type, row.brand, row.origin, row.application]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

/** Distinct, non-empty values for a given row field, in first-seen order. */
export const distinctValues = (rows: ProductRow[], key: "type" | "brand" | "origin") => {
  const seen = new Set<string>();
  rows.forEach((row) => {
    const value = row[key]?.trim();
    if (value) seen.add(value);
  });
  return [...seen];
};
