# @ulu/vite-plugin-no-index

A simple Vite plugin that adds `_headers` and `robots.txt` to the build output directory (`outDir`) to prevent search engines from indexing the site.

## Installation

```bash
npm install -D @ulu/vite-plugin-no-index
```

## Usage

In your `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import noIndex from "@ulu/vite-plugin-no-index";

export default defineConfig({
  plugins: [
    noIndex({ enabled: true })
  ]
});
```

### Options

| Option  | Type      | Default | Description                                                               |
|---------|-----------|---------|---------------------------------------------------------------------------|
| enabled | `boolean` | `false` | When true, the plugin generates the `_headers` and `robots.txt` files.    |

## Output

When `enabled: true`, the plugin will create the following files in your Vite `outDir` upon building:

**_headers**
```text
/*
  X-Robots-Tag: noindex
```

**robots.txt**
```text
User-agent: *
Disallow: /
```
