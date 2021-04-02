type AvailableStore = Array<{
  store: {
    image: {
      uri: string;
    };
  };
}>;

interface ComicList {
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
