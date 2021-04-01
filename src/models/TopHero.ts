type Appearances = Array<{
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
  appearances: Appearances;
}

export default TopHero;
