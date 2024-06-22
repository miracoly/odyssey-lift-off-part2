import {Resolvers} from './types';
import {AuthorModel, TrackModel} from './models';

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}): Promise<TrackModel[]> =>
      dataSources.trackApi.getTracksForHome(),
  },
  Track: {
    author: ({authorId}, _, {dataSources}): Promise<AuthorModel> =>
      dataSources.trackApi.getAuthor(authorId),
  }
}