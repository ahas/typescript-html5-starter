import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/lib.ts",
    output: {
      format: "es", //
      file: "lib/lib.mjs",
      sourcemap: true,
    },
    plugins: [typescript({ declarationDir: "lib" })],
  },
  {
    input: "./src/lib.ts",
    output: {
      format: "umd",
      file: "dist/lib.js",
      name: "lib",
      sourcemap: true,
    },
    plugins: [typescript({ declarationDir: "dist" })],
  },
];
