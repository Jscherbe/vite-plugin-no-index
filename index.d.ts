import { Plugin } from "vite";

export interface VitePluginNoIndexOptions {
  /**
   * When true, the plugin generates the _headers and robots.txt files in the outDir.
   * @default false
   */
  enabled?: boolean;
}

/**
 * Adds _headers, robots.txt files to prevent search engine indexing
 * @param options Plugin configuration options
 */
export default function vitePluginNoIndex(options?: VitePluginNoIndexOptions): Plugin;
