# CLIpedia

CLIpedia is a Command Line based Wikipedia Scraper.

# Requirements

-   Git
-   Npm v8
-   Node v19

# Installation

Note: If some of the commands do not work on Windows especially chmod, Consider using Git bash or WSL.

## Option 1: To install globally

Type the given commands in your terminal:

```bash
git clone https://github.com/V3dantSh4rma/CLIpedia.git
cd CLIpedia
npm install -g
npm link
chmod +x dist/index.js
```

Viola! It is now successfully installed on your system globally.

## Option 2: To just try it out

Type the given commands in your terminal:

```bash
git clone https://github.com/V3dantSh4rma/CLIpedia.git
cd CLIpedia
npm install
npm run start "<yourquery>"
```

> **_NOTE:_** If you want to for a phrase with more than 1 word, surround them with quotes. For Eg:
> <br> <br>
> `$ npm run start "Nikola Tesla"`
