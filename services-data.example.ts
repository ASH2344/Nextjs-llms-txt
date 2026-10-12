/**
 * services-data.example.ts
 * Example shape for the services array consumed by generate-llms-txt.ts
 * and app/llms.txt/route.ts. Copy to services-data.ts and fill in.
 */
import type { LlmsService } from "./generate-llms-txt";

export const services: LlmsService[] = [
  {
    name: "AI Search Optimization",
    slug: "ai-search-optimization",
    summary:
      "Structure your site so ChatGPT and AI assistants can understand and cite your business.",
  },
  {
    name: "Local SEO",
    slug: "local-seo",
    summary:
      "Rank in the Google Map Pack and turn nearby searches into calls.",
  },
  {
    name: "Technical SEO Audit",
    slug: "technical-seo-audit",
    summary:
      "Find every issue silently killing your rankings, ranked by impact.",
  },
];
