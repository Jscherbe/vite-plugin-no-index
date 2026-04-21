/**
 * @module vite-plugin-no-index
 * Adds _headers, robots.txt files to prevent search engine indexing
 */

import fs from "fs";
import path from "path";

/**
 * Adds two files to outDir during build _headers, robots.txt files to prevent search engine indexing
 * @param {Object} options Object with { enabled: true/false }
 * @returns 
 */
export default function vitePluginNoIndex(options = { enabled: false }) {
  let outDir;

  return {
    name: "vite-plugin-no-index",
    configResolved(resolvedConfig) {
      outDir = path.resolve(resolvedConfig.root, resolvedConfig.build.outDir);
    },
    closeBundle() {
      if (!outDir) {
        throw new Error("Unable to resolve vite outDir")
      }
      // If the plugin is disabled, skip generating the files
      if (!options.enabled) return;

      // 1. Create _headers file
      const headersContent = "/*\n  X-Robots-Tag: noindex\n";
      fs.writeFileSync(path.join(outDir, "_headers"), headersContent);
      
      // 2. Create robots.txt file
      const robotsContent = "User-agent: *\nDisallow: /\n";
      fs.writeFileSync(path.join(outDir, "robots.txt"), robotsContent);

      console.log("Vite Plugin No Index: Injected noindex rules for the build to outDir.");
    }
  };
}