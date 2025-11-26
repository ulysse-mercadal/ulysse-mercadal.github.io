import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const isProd = process.env.NODE_ENV === "production";
const repoName = "r-type";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",
};

export default withMDX(config);
