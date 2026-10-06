// The gate (HOLIDAY.md): every internal link and image resolves, and every
// page has a <title> and a lang. Node only, no packages.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set([".git", "node_modules"]);

function pages(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...pages(path));
    else if (name.endsWith(".html")) out.push(path);
  }
  return out;
}

function resolves(from, ref) {
  const clean = decodeURIComponent(ref.split("#")[0].split("?")[0]);
  if (clean === "") return true;
  const target = clean.startsWith("/") ? join(root, clean) : resolve(dirname(from), clean);
  if (!existsSync(target)) return false;
  if (statSync(target).isDirectory()) return existsSync(join(target, "index.html"));
  return true;
}

const problems = [];
let refs = 0;
const files = pages(root);

for (const file of files) {
  const rel = relative(root, file);
  const html = readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!title || title[1].trim() === "") problems.push(`${rel}: no <title>`);
  if (!/<html[^>]*\slang="[^"]+"/i.test(html)) problems.push(`${rel}: no lang on <html>`);
  for (const [, attr, ref] of html.matchAll(/\s(href|src)="([^"]*)"/gi)) {
    if (/^(https?:|mailto:|tel:|data:|#)/i.test(ref) || ref.startsWith("//")) continue;
    refs++;
    if (!resolves(file, ref)) problems.push(`${rel}: ${attr}="${ref}" does not resolve`);
  }
}

for (const p of problems) console.error(p);
const line = `check: ${files.length} pages, ${refs} internal links and images, ${problems.length} problems`;
console.log(problems.length ? `${line} (FAIL)` : `${line} (OK)`);
process.exit(problems.length ? 1 : 0);
