type PersonsIcons = Array<{
  id: number;
  image: {
    uri: string;
  };
}>;

interface TopFilms {
  id: number;
  name: string;
  image: {
    uri: string;
  };
  description: string;
  persons: PersonsIcons;
}

export default TopFilms;
