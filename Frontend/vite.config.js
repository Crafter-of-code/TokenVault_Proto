import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Your existing CSS Modules configuration (if any)
      rules: [
        {
          test: /\.module\.css$/, // ✅ Target CSS Modules
          use: ["style-loader", "css-loader?modules"],
        },
      ],
    },
    build: {
      target: "es2022", // Recommended minimum target
    },
  },
});
