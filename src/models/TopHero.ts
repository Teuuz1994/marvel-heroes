type Appearances = Array<{
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
  appearances: Appearances;
}

export default TopHero;
