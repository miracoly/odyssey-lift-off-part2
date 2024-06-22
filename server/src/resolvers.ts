export const resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}) =>
      dataSources.trackApi.getTracksForHome(),
  },
  Track: {
    author: ({authorId}, _, {dataSources}) =>
      dataSources.trackApi.getAuthor(authorId),
  }
}