interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function netlifyImageLoader({ src, width, quality }: LoaderProps) {
  // Safe lookup checking process.env or casting import.meta to avoid strict type complaints
  const isLocal =
    process.env.NODE_ENV === "development" || 
    (typeof import.meta !== "undefined" && (import.meta as any).env?.DEV);

  // If local, bypass Netlify optimization and return the source directly
  if (isLocal) {
    // Ensure local relative paths have a leading slash so the browser can find them
    if (!src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("/")) {
      return "/" + src;
    }
    return src;
  }

  let url = src;
  if (!src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("/")) {
    url = "/" + src;
  }
  const q = quality || 80;
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&fm=avif&q=${q}`;
}