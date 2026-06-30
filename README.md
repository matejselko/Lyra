# Lyra — Fingerprint Verifier

A self-hosted, fully offline tool for comparing PGP key fingerprints, SSH key fingerprints, or any hex/text identifiers — character by character, with every difference visually highlighted.

Built with the same visual language as Andromeda (black & white liquid glass UI, animated star field, DM Serif Display + Outfit typography).

## Features

- **100% local** — all comparison logic runs in your browser via plain JavaScript. Nothing is ever sent to a server.
- **Smart normalisation** — optionally ignores case, whitespace/colons/hyphens, and common prefixes (`0x`, `SHA256:`, `fingerprint:`) before comparing.
- **Character-level diff** — uses an LCS (longest common subsequence) diff algorithm to show exactly which characters match, which are mismatched, and which are extra/missing in either string.
- **Clear visual result** — green pulse + particle burst animation on match, red shake animation on mismatch.
- **No dependencies on the frontend** — pure HTML/CSS/JS, no build step, no frameworks.

## Quick start (Docker)

```bash
docker run -d -p 3458:3000 --name lyra-fingerprint ghcr.io/YOUR_GITHUB_USERNAME/lyra-fingerprint:latest
```

Then open http://localhost:3458

## Quick start (docker-compose)

```bash
docker compose up -d
```

## Publishing to GitHub + GHCR

1. Create a new repo (e.g. lyra-fingerprint) on GitHub.
2. Upload all files from this project keeping the folder structure:
   - frontend/index.html
   - backend/server.js
   - backend/package.json
   - .github/workflows/docker.yml
   - Dockerfile
   - docker-compose.yml
   - .gitignore
   - .dockerignore
   - README.md
3. Push to the main branch. GitHub Actions will automatically build and publish to ghcr.io/your-username/lyra-fingerprint:latest
4. Update docker-compose.yml — replace YOUR_GITHUB_USERNAME with your actual GitHub username.
5. Make the GHCR package public (Package settings -> Change visibility) so it can be pulled without authentication.

## Local development (no Docker)

```bash
cd backend
npm install
npm start
```

Then open http://localhost:3000

## How the comparison works

1. Both fingerprint strings are normalised according to the toggles you select:
   - Ignore case: lowercases both strings
   - Ignore spaces/formatting: strips whitespace, colons, and hyphens
   - Strip prefixes: removes 0x, SHA256:, SHA1:, MD5:, fingerprint: prefixes
2. The normalised strings are compared character-by-character using a dynamic-programming LCS algorithm, the same technique used by diff tools.
3. If they match exactly after normalisation, a green success animation plays.
4. If they don't match, every character is colour-coded:
   - Grey: matches
   - Red: present in Fingerprint A but different/missing in B
   - Blue: present in Fingerprint B but different/missing in A

## License

MIT

