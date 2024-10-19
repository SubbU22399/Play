# for creating the react app

    - npx create-react-app  my-app
    - cd my-app
    - npm start
    - npm run build
    - npm run eject
    - npm install

# For creating the routs

- npm install react-router-dom

# For installing and configuring Tailwind CSS

    npm install -D tailwindcss
    npx tailwindcss init

- Configure your template paths

  /** @type {import('tailwindcss').Config} \*/
  module.exports = {
  content: [
  "./src/**/\*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }

- Add the Tailwind directives to your CSS
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

# Git commands

git remote add origin https://github.com/SubbU22399/Play.git
git branch -M main
git push -u origin main

- git add .
- git commit -m "your commit message"
- git push origin main
- git branch -M main

# fire base installation

- npm install firebase
- npm install -g firebase-tools

# redux setup

- npm i -D @redux/toolkit
- npm i react-redux
