type Creators = Array<{
  image: {
    uri: string;
  };
}>;

interface TopHero {
  name: string;
  image: {
    uri: string;
  };
  description: string;
  creators: Creators;
}

export default TopHero;
