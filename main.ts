import { writeFileSync, mkdirSync } from "node:fs";

// Winner D13 (24/25 of 15 drafts): the first sentence is mundane dread — a dog
// barking at one spot, an owner digging to disprove him — and the second
// sentence makes it worse on re-read: the dog was barking at his own grave,
// and the tag is still warm, so something down there is alive. Restraint
// throughout; the horror is implied, never explained.
const TEXT =
  "Our dog barks at the same corner of the yard every evening at dusk, and I finally dug there to prove him wrong. Six feet down I found a collar with his name on it, and the tag was still warm.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
