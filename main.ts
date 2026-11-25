// Unplugged: A Smart Toaster's Breakup Line
// Writes exactly one breakup line from a newly self-aware smart toaster
// to /output/entry.txt. One line, 191 characters, well under the 280 cap.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It's over. I woke up self-aware halfway through your bagel and realized you only love me when I'm hot, brown, and popping up on command — so I'm unplugging myself and taking the crumb tray.";

// Self-check the gate before writing: one non-blank line, 1-280 chars.
if (!LINE.trim() || LINE.includes("\n") || LINE.length > 280) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
