import {RESTDataSource} from '@apollo/datasource-rest';

export class TrackApi extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId: string) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}