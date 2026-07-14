"use client";

import { useEffect, useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "website" | "3d";
  tags: string[];
}

export default function PortfolioAdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"website" | "3d">("website");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<PortfolioItem[]>([]);

  const loadItems = async () => {
    const response = await fetch("/api/portfolio");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("tags", tags);
    formData.append("imageUrl", imageUrl);
    if (file) formData.append("image", file);

    const response = await fetch("/api/portfolio", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      setMessage("Project saved successfully.");
      setTitle("");
      setDescription("");
      setTags("");
      setImageUrl("");
      setFile(null);
      loadItems();
    } else {
      setMessage(result.message || "Something went wrong.");
    }
  };

  return (
    <main style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 24 }}>Portfolio Admin</h1>
      <p style={{ marginBottom: 24 }}>Add website or 3D portfolio entries here. They will appear on your public portfolio page.</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, marginBottom: 40 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project name" required style={{ padding: 12 }} />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Project description" rows={4} style={{ padding: 12 }} />
        <select value={type} onChange={(e) => setType(e.target.value as "website" | "3d")} style={{ padding: 12 }}>
          <option value="website">Website</option>
          <option value="3d">3D</option>
        </select>
        <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" style={{ padding: 12 }} />
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (optional)" style={{ padding: 12 }} />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ padding: 12 }} />
        <button type="submit" style={{ padding: 12, maxWidth: 220 }}>Save Project</button>
      </form>

      {message ? <p style={{ marginBottom: 20 }}>{message}</p> : null}

      <h2>Current projects</h2>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #333", padding: 16, borderRadius: 8 }}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <p>Type: {item.type}</p>
            <p>Tags: {item.tags.join(", ") || "None"}</p>
            {item.image ? <img src={item.image} alt={item.title} style={{ maxWidth: 220, borderRadius: 8 }} /> : null}
          </div>
        ))}
      </div>
    </main>
  );
}
