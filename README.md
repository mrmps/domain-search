
<a href="https://domainloom.com">
  <img alt="DomainLoom – A domain name search engine powered by kdb.ai" src="https://domainloom.com/logo" />
  <h1 align="center">🧵 DomainLoom</h1>
</a>

<p align="center">
  A domain name search engine powered by KDB.AI, with names supplied by Brandpa (more sources coming soon)
</p>

<p align="center">
  <a href="https://twitter.com/michael_chomsky">
    <img src="https://img.shields.io/twitter/follow/michael_chomsky?style=flat&label=michael_chomsky&logo=twitter&color=0bf&logoColor=fff" alt="DomainLoom Twitter follower count" />
  </a>
  <a href="https://github.com/domainloom/domainloom">
    <img src="https://img.shields.io/github/stars/domainloom/domainloom?label=domainloom%2Fdomainloom" alt="DomainLoom repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

DomainLoom is a domain name search engine powered by kdb.ai, with names supplied by Brandpa and more sources coming soon.

You can clone & create this repo locally with the following command:

```bash
git clone https://github.com/mrmps/domain-search
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
BACKEND_URL='YOUR_BACKEND_URL'
```

To run the backend, you need a Cohere API key, a VoyageAI API key, and also the KDB.AI credentials. Note that you don't need the KDB.AI credentials for the frontend.

## Cloning the Backend

To clone the backend, use the following repository:

[DomainsGPT Backend](https://replit.com/@mryaboy/DomainsGPT)

## Author

- DomainLoom Team ([@michael_chomsky](https://twitter.com/michael_chomsky))
