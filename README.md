# cms-test-build

This is a Decap CMS test build for Eleventy Zenblog template.

## Overview

This project is a test build combining:
- **Eleventy (11ty)**: A simpler static site generator
- **Decap CMS** (formerly Netlify CMS): Git-based content management system
- **Zenblog Template**: A blog template for content creation

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm start
```

This will start the Eleventy development server with live reload at `http://localhost:8080`.

### Build
```bash
npm run build
```

This will build the static site to the `public/` directory.

## CMS Access

The Decap CMS admin interface is available at `/admin` when running the development server or after deployment.
