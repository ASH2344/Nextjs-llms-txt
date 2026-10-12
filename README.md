# nextjs-llms-txt

Generate an `llms.txt` for your Next.js site from a services (or pages) data
file — the emerging standard that tells large language models what your site
is about, so AI assistants like ChatGPT can find and cite your business.

Built by [HustleSEO](https://hustleseo.io) — we help US businesses rank on
Google **and** get cited by AI answers.

## Why

AI assistants answer questions by reading the web. `llms.txt` (proposed by
[llmstxt.org](https://llmstxt.org)) gives them a clean, machine-readable map
of your site: what you offer, where, and which pages to quote. Sites with a
good `llms.txt` are easier for models to understand — and being understood is
the first step to being cited.

## Usage

1. Define your services in `lib/services-data.ts` (see
   `lib/services-data.example.ts` for the shape).
2. Add the route below — it serves `/llms.txt` dynamically, so it stays in
   sync with your content automatically.

```ts
// app/llms.txt/route.ts
import { generateLlmsTxt } from "@/lib/generate-llms-txt";
import { services } from "@/lib/services-data";

export async function GET() {
  const txt = generateLlmsTxt({
    siteName: "Your Business",
    siteUrl: "https://yourbusiness.com",
    description: "What your business does, in one or two sentences.",
    services,
  });
  return new Response(txt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

## What it generates

```
# Your Business
> What your business does.

## Services
- [Service name](https://yourbusiness.com/services/slug): one-line summary
...
```

## Notes

- Keep each service summary to one quotable sentence — that's what models lift.
- Pair with FAQ schema on the same pages; `llms.txt` gets you understood,
  schema gets you cited.
- Regenerate on every build (dynamic route) — never let it go stale.

## License

MIT — use it on client sites freely.
