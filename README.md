# Kamyla's Wedding Website

This is the website that I created for a friend of my wife, it's heavily inspired by my wedding's website, which you can find the source code [here](https://github.com/cdias900/my-wedding-website). In it you can find all the information related to her story with her fianceé, some pictures of them and the gift lists.

# Build Status [![Netlify Status](https://api.netlify.com/api/v1/badges/b2253f62-329f-4837-8e74-ba6044656964/deploy-status)](https://app.netlify.com/sites/kamylaeantonio/deploys)

# Technologies

Here is a list of some of the technologies used in this project:

- Core:
  - React
  - React Router
  - Styled Components
  - TypeScript
  - Axios
- Linting:
  - ESLint
  - Prettier
  - Husky
  - CommitLint
  - Commitizen
- Analytics:
  - Firebase Analytics
- Localization:
  - i18next
- PWA:
  - Workbox Service Worker

TODO: Add unit tests

# Project Structure


This project is divided into some folders inside the `src` directory, according to the file's responsibility.

The app also works offline with the help of a service worker. The service worker is responsible for caching the website content and letting the user know when there is a new version of the content.


