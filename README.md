# symfony-react-user-post-project
Simple website using symfony and react js

- Install symfony, composer, npm

Start the application::
--
- $ symfony server:start

Check user api using postman:
--
- Api Url: https://localhost:8000/api/users

Build React Frontend:
--
- $ composer require symfony/webpack-encore-bundle

followed by - 

- $ npm install @symfony/webpack-encore --save-dev

Add following dependencies:
--
- $ npm add @babel/preset-react --dev
- $ npm add react-router-dom
- $ npm add --dev react react-dom prop-types axios
- $ npm add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime

Add following dependency for pagination:
--
- npm i react-paginate --save


# Build and Run Application:
--
- Encore will load ./assets/app.js as the entry point of the application and use it to manage any JavaScript related files.
- React components: create new folder "components" under "assets/" directory. Inside the component folder Home, Posts and Users components are implemented.
- Start symfony at one terminal: symfony server:start
- Watch webpack-encore another terminal: npm run watch
- If there is CORS Error, install the [moesif](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US)  CORS extension and Turn it ON.
