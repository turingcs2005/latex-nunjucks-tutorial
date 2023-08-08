# Infrastructure setup

1. Install LaTeX compiler on Ubuntu (virtual machine or docker container)

   <pre class="command-line"><code>sudo apt install texlive-full</code></pre>

2. Install npm packages (plus type declarations if you use TypeScript) on the back end

   - express, cors, cookie-parser, dotenv, mongodb, mongoose, sequelize, tedious, etc.
   - child_process, fs-extra, string-to-stream, temp, through2
  
3. (Optional) Set up TypeScript on the back end

4. Add code for printing LaTeX to PDF (server/src/app-data/app-tools/node-latex.mts)
   - Source code below are based on <mark>latex-node</mark> npm package.
   - <mark>lualatex</mark> is set as the default compiler because it offers a few advanced features (see line 112).

