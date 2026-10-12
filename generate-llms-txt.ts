/**
 * generate-llms-txt.ts
 * Build an llms.txt string from your site's data so AI assistants can
 * understand — and cite — your business.
 *
 * By HustleSEO (https://hustleseo.io)
 */

export interface LlmsService {
  name: string;
  slug: string; // e.g. "ai-search-optimization" -> /services/<slug>
  summary: string; // one quotable sentence
}

export interface LlmsTxtOptions {
  siteName: string;
  siteUrl: string; // no trailing slash, e.g. "https://example.com"
  description: string;
  services: LlmsService[];
  servicesBasePath?: string; // default "/services"
}

export function generateLlmsTxt(opts: LlmsTxtOptions): string {
  const base = `${opts.siteUrl}${opts.servicesBasePath ?? "/services"}`;
  const lines: string[] = [
    `# ${opts.siteName}`,
    `> ${opts.description}`,
    ``,
    `## Services`,
  ];
  for (const s of opts.services) {
    lines.push(`- [${s.name}](${base}/${s.slug}): ${s.summary}`);
  }
  lines.push(
    ``,
    `## Contact`,
    `- [Website](${opts.siteUrl})`
  );
  return lines.join("\n");
}
