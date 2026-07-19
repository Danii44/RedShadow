interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function netlifyImageLoader({ src, width, quality }: LoaderProps) {
  let url = src;
  if (!src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("/")) {
    url = "/" + src;
  }
  const q = quality || 80;
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&fm=avif&q=${q}`;
}
