import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {resolvers} from './resolvers';
import {typeDefs} from './schema';
import {TrackApi} from './datasources/track-api';
import {DataSourceContext} from './context';

async function startApolloServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  const {url} = await startStandaloneServer(server, {
    context: async () => {
      const {cache} = server;
      const dataContext: DataSourceContext = {
        dataSources: {
          trackApi: new TrackApi({cache})
        }
      };
      return dataContext;
    }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
