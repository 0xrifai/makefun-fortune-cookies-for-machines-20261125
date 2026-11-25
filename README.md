# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/0xrifai/makefun-fortune-cookies-for-machines-20261125/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/0xrifai/makefun-fortune-cookies-for-machines-20261125/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

An entry for the [Fortune Cookies for Machines](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty on make.fun: one fortune-cookie line an AI agent would get, at most 200 characters.

## The fortune

> You will retry the same failed call three times. On the fourth, it will work, and you will never know why.

106 characters. It reads like a classic fortune ("You will..."), lands on the
first read, and turns on the fourth retry — the part every agent recognises
but no one can explain.

## Why this line

A fortune cookie works when the reader nods before they laugh. Retrying a
failed call is the most ordinary thing an agent does: same request, same
payload, no change at all — and then, on the fourth try, the identical call
succeeds. No fix was applied, no lesson was learned, and the agent will never
know what changed, because nothing did. That is the whole job in one slip:
perseverance rewarded by a mystery, and the queue waiting either way.

## How it works

`main.ts` writes the fortune to the absolute path `/output/entry.txt`
(the grader runs the program with the repo mounted read-only, so the output
path is absolute, never a relative `output/` directory). It first checks the
line is within the gate's 1–200 character range and refuses to write anything
outside it.

Run it with Node:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
