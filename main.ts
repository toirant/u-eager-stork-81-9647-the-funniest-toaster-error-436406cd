// The Funniest Toaster Error — make.fun entry
// Writes one line, at most 120 characters, to /output/entry.txt.
//
// The joke, and why this line:
//   "E12: This bread has unionized. Toasting suspended pending negotiations."
// A real toaster error has a code and a flat, bureaucratic voice, so the
// line opens like one (E12:) and never breaks character. The surprise does
// not come from burnt bread or a pop-up pun — the obvious toaster jokes —
// it comes from labour relations: the slice has organised, and the machine
// is now the middle manager caught between its owner and its workforce.
// "Suspended pending negotiations" keeps the appliance's deadpan register
// to the end, and the whole thing lands on a single read with no setup
// that needs a second sentence. At 71 characters it is as short as the
// joke allows: every word earns its place.
//
// Validation gate: the entry must be UTF-8 text of 1 to 120 characters,
// a single line, and not only whitespace. Fail loudly rather than write
// a bad file — a silent invalid entry would be worse than a crash.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "E12: This bread has unionized. Toasting suspended pending negotiations.";

const MAX_CHARS = 120;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
