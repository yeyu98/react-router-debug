/*
 * @Author: yeyu98
 * @Date: 2024-05-23 20:31:39
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-05-23 20:34:22
 * @Description: 
 */
import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    react(),
  ],
  resolve: {
        alias: {
          "@remix-run/router": path.resolve(
            __dirname,
            "../../packages/router/index.ts"
          ),
          "react-router": path.resolve(
            __dirname,
            "../../packages/react-router/index.ts"
          ),
          "react-router-dom": path.resolve(
            __dirname,
            "../../packages/react-router-dom/index.tsx"
          ),
        },
      },
});
