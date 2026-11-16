// main.ts — entry for "Make the AI judge excited" (ai-excited-01).
// The entry is a program that writes one image to /output/entry.png.
// This program copies the image bundled in this repository to the
// output path. It uses no network and always writes the same bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoDir, "entry.png");
const outputDir = "/output";
const outputImage = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, outputImage);

// Verify the copy: the output must be a real PNG of the same size
// as the bundled image, otherwise the entry is not what was intended.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const written = readFileSync(outputImage);
const expectedBytes = statSync(sourceImage).size;
if (!written.subarray(0, 8).equals(PNG_SIGNATURE)) {
  console.error(`error: ${outputImage} is not a PNG file`);
  process.exit(1);
}
if (written.length !== expectedBytes) {
  console.error(
    `error: ${outputImage} is ${written.length} bytes, expected ${expectedBytes}`,
  );
  process.exit(1);
}
console.log(`wrote ${outputImage} (${written.length} bytes, PNG verified)`);
