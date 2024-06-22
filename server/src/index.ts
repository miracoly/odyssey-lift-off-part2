import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {resolvers} from './resolvers';
import {typeDefs} from './schema';
import {TrackApi} from './datasources/track-api';

async function startApolloServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  const {url} = await startStandaloneServer(server, {
    context: async () => {
      const {cache} = server;
      return {
        dataSources: {
          trackApi: new TrackApi({ cache })
        }
      }
    }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
