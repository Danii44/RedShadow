import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const dataFilePath = path.join(process.cwd(), "src", "data", "portfolio-items.json");
const defaultItems = [
  {
    id: 1,
    title: "Industrial 3D Showcase",
    description: "A cinematic 3D product showcase with detailed lighting and interaction.",
    image: "/assets/img/portfolio/ca/portfolio-2.jpg",
    type: "3d",
    tags: ["3D", "Visual", "Render"],
  },
];

async function readItems() {
  try {
    const content = await fs.readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : defaultItems;
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify(defaultItems, null, 2), "utf8");
    return defaultItems;
  }
}

async function writeItems(items: unknown[]) {
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), "utf8");
}

export async function GET() {
  const items = await readItems();
  return NextResponse.json(items.filter((item) => item?.type === "3d"));
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const imageUrl = String(formData.get("imageUrl") || "").trim();
  const tagsValue = String(formData.get("tags") || "").trim();
  const file = formData.get("image") as File | null;

  if (!title) {
    return NextResponse.json({ success: false, message: "Title is required" }, { status: 400 });
  }

  let image = imageUrl || "/assets/img/portfolio/ca/portfolio.jpg";

  if (file && typeof file.name === "string") {
    const uploadDir = path.join(process.cwd(), "public", "uploads", "portfolio");
    await fs.mkdir(uploadDir, { recursive: true });
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "-")}`;
    const filePath = path.join(uploadDir, safeName);
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);
    image = `/uploads/portfolio/${safeName}`;
  }

  const items = await readItems();
  const newItem = {
    id: Date.now(),
    title,
    description,
    image,
    type: "3d",
    tags: tagsValue
      ? tagsValue.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [],
  };

  await writeItems([newItem, ...items]);

  return NextResponse.json({ success: true, item: newItem });
}
