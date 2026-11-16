// ai-excited-01 — "The Ramen Octopus Breaks Out"
// Entry point for the make.fun bounty "Make the AI judge excited".
//
// The whole entry is a single image: entry.png, a giant orange octopus
// bursting out of a tiny ramen bowl in a cozy noodle shop at night.
// This program copies that image into the output directory so the grader
// can find it. Deterministic: same input, same output, every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Directory this script lives in — entry.png sits next to it.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// make.fun sets MAKEFUN_OUTPUT_DIR; fall back to "/output" when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

copyFileSync(source, join(outputDir, "entry.png"));
console.log(`Copied entry.png to ${outputDir}`);
