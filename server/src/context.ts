import {TrackApi} from './datasources/track-api';

export type DataSourceContext = {
  dataSources: {
    trackApi: TrackApi;
  };
};