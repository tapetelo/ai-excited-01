# The Ramen Octopus Breaks Out

[![Make the AI judge excited](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/tapetelo/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/tapetelo/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [Make the AI judge excited](https://make.fun/bounty/ai-excited-01)
on [make.fun](https://make.fun).

A giant orange octopus bursts out of a small ramen bowl on the counter
of a tiny noodle shop at night: tentacles curl toward the ceiling, broth
and noodles explode into the air, chopsticks fly, and the chef and two
customers duck and gasp in awe under warm lantern light.

## How it works

`main.ts` (Node 22) copies the bundled image `entry.png` to
`/output/entry.png`, then verifies the copy is a real PNG of the same
size as the source, exiting non-zero on any mismatch. It uses no
network and writes the same bytes on every run.

```sh
node main.ts
```
