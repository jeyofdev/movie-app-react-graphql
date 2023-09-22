# Movies App with Graphql and React

This is a Movies App using React, Apollo, Graphql Firebase and The Movie Database (TMDB) API.</p>

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
