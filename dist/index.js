import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { dataSourceGoodCorner } from "../src/config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
const start = async () => {
    await dataSourceGoodCorner.initialize();
    const schema = await buildSchema({
        resolvers: [AdResolver],
    });
    const server = new ApolloServer({
        schema,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
};
start().catch((error) => {
    console.error("Error starting the server:", error);
});
//# sourceMappingURL=index.js.map