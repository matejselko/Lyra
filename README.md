<div align="center">

# ✦ Lyra

### Fingerprint Verifier

*A self-hosted, fully offline tool for comparing PGP, SSH, or any hex fingerprints — character by character.*

</div>

---

## Overview

Lyra normalises and compares two fingerprint strings entirely **in your browser**. Nothing is ever sent to a server, logged, or stored. Paste your expected fingerprint and the one you received, hit compare, and instantly see whether they match — with every differing character clearly highlighted.

Built with the same visual language as [Andromeda](https://github.com/matejselko/andromeda): a black-and-white liquid glass interface, an animated star field, and the DM Serif Display + Outfit type pairing.

## Features

| | |
|---|---|
| 🔒 **100% local** | All comparison logic runs in plain JavaScript in your browser. No network requests, no telemetry, no backend processing of your data. |
| ⚡ **Smart normalisation** | Optionally ignores case, whitespace/colons/hyphens, and common prefixes (`0x`, `SHA256:`, `fingerprint:`) before comparing. |
| 🔍 **Character-level diff** | Uses an LCS (longest common subsequence) algorithm — the same technique behind `diff` — to show exactly which characters match, mismatch, or are missing from either string. |
| ✨ **Clear visual feedback** | A green pulse with a particle burst on match; a red shake animation with a full character breakdown on mismatch. |
| 🐳 **Self-hosted** | Single Docker container, no database, no external dependencies. |

## Quick start

### Docker

```bash
docker run -d -p 3458:3000 --name lyra ghcr.io/matejselko/lyra:latest
```

Then open **http://localhost:3458**

### Docker Compose

```bash
docker compose up -d
```

### Local development (no Docker)

```bash
cd backend
npm install
npm start
```

Then open **http://localhost:3000**


## How the comparison works

1. **Normalisation** — each string is processed according to the toggles you select:
   - *Ignore case* — lowercases both strings
   - *Ignore spaces/formatting* — strips whitespace, colons, and hyphens
   - *Strip prefixes* — removes `0x`, `SHA256:`, `SHA1:`, `MD5:`, and `fingerprint:` prefixes
2. **Diff** — the normalised strings are compared character-by-character using a dynamic-programming LCS algorithm.
3. **Match** — if the strings are identical after normalisation, a green success animation plays.
4. **Mismatch** — if they differ, every character is colour-coded:
   - **Grey** — matches
   - **Red** — present in Fingerprint A, different or missing in B
   - **Blue** — present in Fingerprint B, different or missing in A

## License

[MIT](https://github.com/matejselko/Lyra/blob/main/LICENSE)


*Note: This project uses gererative AI on a large scale.*
