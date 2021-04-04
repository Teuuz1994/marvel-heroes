interface PersonsList {
  id: number;
  name: string;
  description: string;
  image: {
    uri: string;
    croped: {
      uri: string;
    };
  };
  appearences: string[];
}

export default PersonsList;
