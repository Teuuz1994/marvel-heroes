type Creators = Array<{
  id: number;
  image: {
    uri: string;
  };
}>;

interface TopHero {
  id: number;
  name: string;
  image: {
    uri: string;
  };
  description: string;
  creators: Creators;
}

export default TopHero;
