# CLIpedia
CLIpedia is a Command Line based Wikipedia Scraper written in [Typescript](https://www.typescriptlang.org/).

# Requirements
- Git
- Npm v8
- Node v19

# Installation
Note: If some of the commands do not work on Windows especially chmod, Consider using Git bash or WSL.

Type the given commands in your terminal:
```
git clone https://github.com/V3dantSh4rma/CLIpedia.git
cd CLIpedia
npm install
tsc
npm link
chmod +x dist/index.js
```

Viola! It is now successfully installed on your project directory.

# Usage
Example: ```clipedia 2pac -o MD``` 

The above Command will save the result to a seperate MD file.

<h2> Valid File Extensions: </h2>

- MD
- JSON
- TXT

<h2>[Optional] The "-o" flag. </h2>
It is derived from the term english term 'output'. When this flag is given along with the Valid File Extension, it will create a seperate file along with the result saved in it.

# Do's and Don'ts 
<h3> Do's: </h3>

```clipedia "file explorer" -o <valid file extension>```

The command above is the right way and will be executed successfully as it is written in the right format.

<h3> Don'ts: </h3>

```clipedia file explorer -o <valid file extension>```

The command above will not be successfull because **if your query is more than one word, it will require a string**. Eg: ``"file explorer"`` and not: ``file explorer``.
