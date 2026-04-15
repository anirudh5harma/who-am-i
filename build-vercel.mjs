import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync } from "fs";
import { build } from "esbuild";

// Clean previous output
if (existsSync(".vercel/output")) rmSync(".vercel/output", { recursive: true });

mkdirSync(".vercel/output/functions/index.func", { recursive: true });
mkdirSync(".vercel/output/static", { recursive: true });

// Copy static client assets
cpSync("dist/client", ".vercel/output/static", { recursive: true });

// Bundle the server into a single self-contained file for the Vercel function
await build({
  entryPoints: ["dist/server/server.js"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outfile: ".vercel/output/functions/index.func/server.js",
  external: ["node:*"],
  // inline all npm deps so the function needs no node_modules
  packages: "bundle",
});

// Write the Vercel function entry that adapts the fetch handler to Node http
writeFileSync(
  ".vercel/output/functions/index.func/index.js",
  `
import server from "./server.js";

export default async function handler(req, res) {
  const host = req.headers.host || "localhost";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const url = new URL(req.url, protocol + "://" + host);

  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) headers[key] = Array.isArray(value) ? value.join(", ") : value;
  }

  const request = new Request(url.toString(), {
    method: req.method,
    headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
    duplex: "half",
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  for (const [key, value] of response.headers.entries()) {
    res.setHeader(key, value);
  }

  const buffer = await response.arrayBuffer();
  res.end(Buffer.from(buffer));
}
`
);

// Vercel function config
writeFileSync(
  ".vercel/output/functions/index.func/.vc-config.json",
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.js",
      launcherType: "Nodejs",
    },
    null,
    2
  )
);

// Vercel output config - static assets first, then SSR catch-all
writeFileSync(
  ".vercel/output/config.json",
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Static assets - serve directly from static dir
        {
          src: "^/assets/(.*)$",
          dest: "/assets/$1",
        },
        {
          src: "^/(favicon\\.ico|placeholder\\.svg|robots\\.txt)$",
          dest: "/$1",
        },
        // Everything else -> SSR function
        {
          src: "/(.*)",
          dest: "/index",
        },
      ],
    },
    null,
    2
  )
);

console.log("Vercel output ready at .vercel/output");
