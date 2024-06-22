import {RESTDataSource} from '@apollo/datasource-rest';
import {AuthorModel, TrackModel} from '../models';

export class TrackApi extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome(): Promise<TrackModel[]> {
    return this.get('tracks');
  }

  getAuthor(authorId: string): Promise<AuthorModel> {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}