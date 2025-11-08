# Landing Page (React + Vite)

Multilingual landing page for a personal/small application stack powered by Docker Compose, Node.js, and Nginx. The UI ships with English and Latvian copy, dual CTA buttons, and paired logos.

## Prerequisites

- Node.js 20+
- npm 10+
- Docker Engine 24+ and Docker Compose v2
- Licensed `RobustaLTPro` font files (`.woff2` and `.woff`). Place them in `public/fonts/` as described below.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

`npm run preview` serves the optimized bundle for local verification.

## Font Setup

1. Obtain the `RobustaLTPro` font files under a valid license.
2. Copy `RobustaLTPro.woff2` and `RobustaLTPro.woff` into `public/fonts/`.
3. The app will fall back to system fonts if the files are missing.

## Icon Setup

Add your branded favicon assets to `public/` with the following filenames:

- `favicon-96x96.png`
- `favicon.svg`
- `favicon.ico`
- `apple-touch-icon.png`

These are referenced by `index.html`, and the same sizes are registered in `public/site.webmanifest`. Replace them with production-ready icons before deployment.

## Dockerized Deployment

The repository includes:

- `Dockerfile` – multi-stage image (Node.js build → Nginx runtime).
- `nginx/default.conf` – SPA-friendly Nginx configuration with caching for static assets.
- `docker-compose.yml` – exposes the container on port `8080`.

Build and run with Docker Compose:

```bash
docker compose up --build
```

Visit [http://localhost:8080](http://localhost:8080) to view the page served by Nginx.

To stop and remove containers:

```bash
docker compose down
```

## Project Structure Highlights

- `src/App.jsx` – landing page content, language toggle logic, CTA buttons.
- `src/App.css` – layout and typography styles, including the RobustaLTPro font stack.
- `public/fonts/` – drop the licensed font assets here.
- `docker-compose.yml` & `nginx/default.conf` – containerization and reverse-proxy setup.
