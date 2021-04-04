export interface Release {
  id: number;
  name: string;
  description: string;
  image: {
    uri: string;
    croped: {
      uri: string;
    };
  };
}

export interface Cronology {
  id: number;
  name: string;
  description: string;
  image: {
    uri: string;
  };
}

interface FilmsList {
  release: Release[];
  cronology: Cronology[];
}

export default FilmsList;
