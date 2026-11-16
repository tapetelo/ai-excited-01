// The Ramen Octopus Breaks Out — make.fun ai-excited-01 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file, and this program copies it,
// byte for byte, to the output path. The gate takes a whole PNG or JPEG of at
// most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
console.log("wrote entry.png to " + outputDir);
