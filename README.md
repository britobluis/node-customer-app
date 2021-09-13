## Follow these steps to start the app locally

1. Go to `/db-docker` and run `docker build . -t local-db` and start with `docker run` on your preferred port.
2. Go to `/server` and run `docker build . -t local-app` and start with `docker run` on your preferred port.
3. Navigate in your browser to `localhost:<PORT>/graphql` to use the GraphiQL UI.
4. Use the Docs to learn about available Queries and Mutations.

Some of the npm packages used are: typescript, ts-node, express, cors, nodemon, typeorm, mysql2, graphql, express-graphql 
