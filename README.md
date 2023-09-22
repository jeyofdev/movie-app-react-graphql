# Movies App with Graphql and React

This is a Movies App using React, Apollo, Graphql Firebase and The Movie Database (TMDB) API.</p>

### Tools

- [React](https://react.dev/) React 18.
- [Typescript](https://www.typescriptlang.org/) JavaScript with syntax for types.
- [ESLint](https://eslint.org/) Find and fix problems in JavaScript and typescript code.
- [Prettier](https://prettier.io/) Code formatter.
- [husky](https://typicode.github.io/husky) Husky improves your commits.
- [firebase](https://firebase.google.com/) Firebase app development platform.
- [materialUI](https://mui.com/) Move faster with intuitive React UI tools.
- [apollo-client](https://www.apollographql.com/docs/react) Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- [Apollo-server](https://www.apollographql.com/docs/apollo-server) Apollo Server is a spec-compliant GraphQL server that's compatible with any GraphQL client.
- [react-hook-form](https://www.react-hook-form.com/) Performant, flexible and extensible forms with easy-to-use validation.
- [lingui](https://lingui.dev/) JavaScript library for internalization (i18n) of JavaScript projects.
- [codegen](https://the-guild.dev/graphql/codegen/) CodeGen is a family of open-source model for program synthesis.
- [Graphql](https://graphql.org/) A query language for an API.

## Getting starting

### Prerequisites

- `node`
- `npm`

### Dependencies

Install dependencies of api :

```sh
cd api && npm install
```

Install dependencies of client :

```sh
cd client && npm install
```

### Environment variables

Creates the .env file in the root directory of the api folder :

```sh
cd api && touch .env
```

In the .env, set the environment variables

Example :

```sh
API_PORT=4040
TEST_API_PORT=4004 # for tests
TMDB_API_KEY=your-TMDB-api-key # Get your TMDb API key and paste here
```

Creates the .env file in the root directory of the client folder :

```sh
cd client && touch .env
```

In the .env, set your api url.

Example :

```sh
VITE_GRAPHQL_URL=http://localhost:4040/graphql

# firebase config
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=

```

### Start the app in dev mode

Run your GraphQL server and your React app with this command :

```sh
npm run dev
```

Navigate to http://localhost:{yourport} in your browser to explore the API with the Apollo Playground.

Navigate to http://localhost:8080 in your browser to run the React app.

### Production

Project available on this [link](https://movie-app-react-graphql.vercel.app/).

### Testing

run tests of the api :

```sh
npm run test:api
```
