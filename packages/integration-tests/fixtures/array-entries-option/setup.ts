import { Options } from "@sentry/bundler-plugin-core";
import * as path from "path";
import { createCjsBundles } from "../../utils/create-cjs-bundles";

const entryPoint1Path = path.resolve(__dirname, "input", "entrypoint1.js");
const entryPoint2Path = path.resolve(__dirname, "input", "entrypoint2.js");
const entryPoint3Path = path.resolve(__dirname, "input", "entrypoint3.js");
const outputDir = path.resolve(__dirname, "out");

createCjsBundles(
  { entrypoint1: entryPoint1Path, entrypoint2: entryPoint2Path, entrypoint3: entryPoint3Path },
  outputDir,
  {
    release: "I AM A RELEASE!",
    include: outputDir,
    releaseInjectionTargets: [/entrypoint1\.js/, entryPoint3Path],
    dryRun: true,
  } as Options
);
