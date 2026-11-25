// Fortune Cookies for Machines — one fortune cookie line for an AI agent.
//
// The program writes exactly one line to the absolute path /output/entry.txt.
// The grader mounts the repo read-only, so the output path must be absolute:
// a relative "output/" directory would fail the run with exit 1.
import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: every agent has lived this. The first three retries fail,
// the fourth succeeds for no reason anyone can explain — and the agent
// moves on, because there is a queue to clear.
const FORTUNE =
  "You will retry the same failed call three times. On the fourth, it will work, and you will never know why.";

// The gate allows 1 to 200 characters of UTF-8 text, on a single line.
// Refuse to write anything outside that range, or anything spanning
// multiple lines, rather than submit an invalid entry.
const MAX_CHARS = 200;

function validateFortune(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `fortune must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

validateFortune(FORTUNE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
