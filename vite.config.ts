import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import SortCss from "postcss-sort-media-queries";
import type { UserConfig } from "vite";

export default defineConfig(({ command }): UserConfig => {
  const htmlFiles = globSync("./src/*.html");

  const input: Record<string, string> = htmlFiles.reduce((acc, file) => {
    const name = path.basename(file, path.extname(file));
    acc[name] = path.resolve(file);
    return acc;
  }, {} as Record<string, string>);

  return {
    root: "src",
    base: "/01-ts-basics/",
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    build: {
      target: "esnext",
      sourcemap: true,
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input,
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/*.html"]),
      SortCss({
        sort: "mobile-first",
      }),
    ],
  };
});
