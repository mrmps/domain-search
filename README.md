
<a href="https://domainloom.com">
  <img alt="DomainLoom – A domain name search engine powered by kdb.ai" src="https://domainloom.com/opengraph-image" />
  <h1 align="center">DomainLoom</h1>
</a>

<p align="center">
  A domain name search engine powered by kdb.ai, with names supplied by Brandpa (more sources coming soon)
</p>

<p align="center">
  <a href="https://twitter.com/domainloom">
    <img src="https://img.shields.io/twitter/follow/domainloom?style=flat&label=domainloom&logo=twitter&color=0bf&logoColor=fff" alt="DomainLoom Twitter follower count" />
  </a>
  <a href="https://github.com/domainloom/domainloom">
    <img src="https://img.shields.io/github/stars/domainloom/domainloom?label=domainloom%2Fdomainloom" alt="DomainLoom repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

DomainLoom is a domain name search engine powered by kdb.ai, with names supplied by Brandpa and more sources coming soon.

## One-click Deploy

You can deploy this template to Vercel with the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdomainloom%2Fdomainloom&project-name=domainloom&repository-name=domainloom&demo-title=DomainLoom&demo-description=A%20domain%20name%20search%20engine%20powered%20by%20kdb.ai%2C%20with%20names%20supplied%20by%20Brandpa%20and%20more%20sources%20coming%20soon&demo-url=https%3A%2F%2Fdomainloom.com&demo-image=https%3A%2F%2Fdomainloom.com%2Fopengraph-image&env=BACKEND_URL&envDescription=...

You can also clone & create this repo locally with the following command:

```bash
npx create-next-app domainloom --example "https://github.com/domainloom/domainloom"
```

Then, install the dependencies with your package manager of choice:

```bash
npm i
yarn
pnpm i
```

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance

## Environment Setup

Based on the project details, set the following environment variable:

```bash
BACKEND_URL='https://domains-gpt-MichaelR35.replit.app'
```

To run the backend, you need a Cohere API key, a VoyaGeAI API key, and also the kdb.ai credentials. Note that you don't need the kdb.ai credentials for the frontend.

## Cloning the Backend

To clone the backend, use the following repository:

[DomainsGPT Backend](https://replit.com/@mryaboy/DomainsGPT)

## Author

- DomainLoom Team ([@domainloom](https://twitter.com/domainloom))
