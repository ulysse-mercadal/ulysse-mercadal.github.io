import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const isProd = process.env.NODE_ENV === "production";
const repoName = "ulysse-mercadal.github.io";  // Change to your repo name

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",              // Replaces `next export`
  trailingSlash: true,           // /docs → /docs/
  images: { unoptimized: true }, // Required for static export

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd
    ? `https://ulysse-mercadal.github.io/${repoName}/`  // Full URL = no 404
    : "",
};

export default withMDX(config);
