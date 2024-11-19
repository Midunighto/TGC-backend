import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { dataSourceGoodCorner } from "../src/config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { TagsResolver } from "./resolvers/TagsResolver";

const start = async () => {
  // Initialiser la connexion à la base de données
  await dataSourceGoodCorner.initialize();

  // Construire le schéma GraphQL avec les résolveurs
  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver, TagsResolver],
  });

  // Créer une instance d'ApolloServer avec le schéma
  const server = new ApolloServer({
    schema,
  });

  // Démarrer le serveur Apollo
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

// Démarrer l'application
start().catch((error) => {
  console.error("Error starting the server:", error);
});
