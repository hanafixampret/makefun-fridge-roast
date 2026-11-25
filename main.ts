import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My fridge has an app, a camera, and opinions about my milk — but the ice maker has been 'updating' since March.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (!entry.trim()) {
  throw new Error("entry must not be only whitespace");
}

// On-subject guard: the roast must be aimed at the fridge itself, not
// at a generic kitchen gadget, so the line has to name it.
const fridgeWords = ["fridge", "ice maker"];
if (!fridgeWords.some((word) => entry.toLowerCase().includes(word))) {
  throw new Error("entry must roast the smart fridge itself");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} characters written to /output/entry.txt`);
