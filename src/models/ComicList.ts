type AvailableStore = Array<{
  id: number;
  store: {
    image: {
      uri: string;
    };
  };
}>;

interface ComicList {
  id: number;
  name: string;
  description: string;
  image: {
    uri: string;
    croped: {
      uri: string;
    };
  };
  avalableStores: AvailableStore;
}

export default ComicList;
