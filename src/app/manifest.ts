import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unitrend International",
    short_name: "Unitrend",
    description: "Printing and packaging supply solutions in Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F4",
    theme_color: "#69010E",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
