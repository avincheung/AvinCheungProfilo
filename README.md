# Avin Cheung — Portfolio

Personal portfolio site for **Cheung Chiu Hei (Avin)** — full-stack developer & project coordinator.

**Live site:** [https://avincheung.github.io/AvinCheungProfilo/](https://avincheung.github.io/AvinCheungProfilo/)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (GitHub Pages)

```bash
$env:GITHUB_PAGES="true"   # PowerShell
pnpm build
```

Static output is written to `out/`.

## Deploy

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds with `GITHUB_PAGES=true` and publishes to GitHub Pages.

**One-time GitHub setup:** Repository → Settings → Pages → Source → **GitHub Actions**.

## Stack

Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · bilingual EN/ZH
