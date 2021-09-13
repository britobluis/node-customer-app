import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from "cors";
import { createConnection } from 'typeorm';
import { schema } from './Schema';
import { Customers } from './Entities/Customers';
import { Addresses } from './Entities/Addresses';


const main = async () => {

    await createConnection({
        type: "mysql",
        database: "customers_db",
        host:"host.docker.internal",
        port: 33064,
        username: "root",
        password: "root",
        logging: true,
        synchronize: true, // turn to false on 2nd run
        entities: [Customers, Addresses],
    });

    const app = express()
    app.use(cors()); // middleware to connect to backend locally without errors
    app.use(express.json()) // json parser

    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    })) // GraphQL setup configuration

    app.listen(9000, () => {
        console.log("server running on port 9000");
    })
}

main().catch((err) => {
    console.log(err);
})