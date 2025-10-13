import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: false,
    target: "esnext",
    external: ["react", "react-dom", "next"],
    esbuildOptions(options) {
        options.jsx = "automatic";
        return options;
    },
});
