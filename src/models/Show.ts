export default interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  officialSite: string;
  schedule: ShowSchedule;
  rating: {
    average: number;
  };
  weight: number;
  network: ShowNetwork;
  webChannel: ShowNetwork;
  dvdCountry: string | null;
  externals: ShowExternals;
  image: ShowImage;
  summary: string;
  updated: number;
  _links: ShowLinks;
}
export interface ShowSchedule {
  time: string;
  days: string[];
}

export interface ShowNetwork {
  id: number;
  name: string;
  country: {
    code: string;
    name: string;
    timezone: string;
  };
}
export interface ShowExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface ShowImage {
  medium: string;
  original: string;
}

export interface ShowLinks {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
  nextepisode: {
    href: string;
  };
}
