import { Image } from 'react-native';
import {
  ComicList,
  PersonsList,
  TopComics,
  TopHero,
  TopFilms,
  FilmsList,
} from '../models';

import {
  ImageCapaOrigemPorJoeQuesada,
  ImageCivilWar,
  ImageDoctorStrange,
  ImageHqParabola,
  ImageHqThanos,
  ImageHqThor,
  ImageHulk,
  ImageInfinityWar,
  ImageIronSpider,
  ImageMoebiusIlustrador,
  ImageStanLee,
  ImageThanos,
  ImageUltimato,
  ImageUltron,
  ImageVision,
  ImageWandaMaximoff,
  ImageWandaVision,
  ImageAvangersInfinityWar,
  ImageCaptainAmerica,
  ImageCaptainMarvel,
  ImageThorMovie,
  ImageIronManOne,
  ImageIronManTwo,
} from '../assets/images';
import {
  ImageCropedHqParabola,
  ImageCropedHqThanos,
  ImageCropedHqThor,
  ImageCropedHqWolverine,
  ImageCropedHulk,
  ImageCropedIronSpider,
  ImageCropedThanos,
  ImageCropedWandaMaximoff,
  ImageCropedCaptainAmerica,
  ImageCropedIronMan,
  ImageCropedIronManTwo,
  ImageCropedThor,
} from '../assets/images/croped-images';
import { IconAmazonLogo, IconAmericanasLogo } from '../assets/icons';

export const topHeroes: TopHero[] = [
  {
    id: 1,
    name: 'Wanda Maximoff',
    image: {
      uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
    },
    description:
      'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.',
    appearances: [
      {
        id: 1,
        image: {
          uri: Image.resolveAssetSource(ImageUltron).uri,
        },
      },
      {
        id: 2,
        image: {
          uri: Image.resolveAssetSource(ImageCivilWar).uri,
        },
      },
      {
        id: 3,
        image: {
          uri: Image.resolveAssetSource(ImageInfinityWar).uri,
        },
      },
      {
        id: 4,
        image: {
          uri: Image.resolveAssetSource(ImageUltimato).uri,
        },
      },
      {
        id: 5,
        image: {
          uri: Image.resolveAssetSource(ImageWandaVision).uri,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Visão',
    image: {
      uri: Image.resolveAssetSource(ImageVision).uri,
    },
    description:
      'Visão é um sintezóide – um andróide composto de sangue e órgãos sintéticos. Ele foi criado por Ultron para destruir os Vingadores, mas ao invés disso ele se voltou contra seu “pai” e faz parte da equipe de super-heróis desde então.',
    appearances: [
      {
        id: 6,
        image: {
          uri: Image.resolveAssetSource(ImageUltron).uri,
        },
      },
      {
        id: 7,
        image: {
          uri: Image.resolveAssetSource(ImageCivilWar).uri,
        },
      },
      {
        id: 8,
        image: {
          uri: Image.resolveAssetSource(ImageInfinityWar).uri,
        },
      },
      {
        id: 9,
        image: {
          uri: Image.resolveAssetSource(ImageUltimato).uri,
        },
      },
      {
        id: 10,
        image: {
          uri: Image.resolveAssetSource(ImageWandaVision).uri,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Doutor Estranho',
    image: {
      uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
    },
    description:
      'Nascido em 1930, Strange era um neurocirurgião incrível e, por isso, também era extremamente arrogante. No auge de sua carreira, ele sofre um acidente de carro e acabou danificando os nervos das mãos.',
    appearances: [
      {
        id: 11,
        image: {
          uri: Image.resolveAssetSource(ImageUltron).uri,
        },
      },
      {
        id: 12,
        image: {
          uri: Image.resolveAssetSource(ImageCivilWar).uri,
        },
      },
      {
        id: 13,
        image: {
          uri: Image.resolveAssetSource(ImageInfinityWar).uri,
        },
      },
      {
        id: 14,
        image: {
          uri: Image.resolveAssetSource(ImageUltimato).uri,
        },
      },
      {
        id: 15,
        image: {
          uri: Image.resolveAssetSource(ImageWandaVision).uri,
        },
      },
    ],
  },
];

export const personsList: PersonsList[] = [
  {
    id: 1,
    name: 'Homem-Aranha',
    description:
      'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
    image: {
      uri: Image.resolveAssetSource(ImageIronSpider).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedIronSpider).uri,
      },
    },
    appearences: [
      'Homem-Aranha 1',
      'Homem-Aranha 2',
      'Homem-Aranha 3',
      'Espetacular Homem-Aranha 1',
      'Espetacular Homem-Aranha 2',
      'Capitão América - Guerra Civil',
      'Homem-Aranha no AranhaVerso',
      'Homem-Aranha - Homecoming',
      'Vingadores - Guerra Infinita',
      'Vingadores - Ultimato',
      'Homem-Aranha - Far for home',
    ],
  },
  {
    id: 2,
    name: 'Wanda Maximoff',
    description:
      'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.',
    image: {
      uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedWandaMaximoff).uri,
      },
    },
    appearences: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
  },
  {
    id: 3,
    name: 'Thanos',
    description:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.",
    image: {
      uri: Image.resolveAssetSource(ImageThanos).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedThanos).uri,
      },
    },
    appearences: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
  },
  {
    id: 4,
    name: 'Hulk',
    description:
      'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.',
    image: {
      uri: Image.resolveAssetSource(ImageHulk).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedHulk).uri,
      },
    },
    appearences: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
  },
];

export const topComics: TopComics[] = [
  {
    id: 1,
    name: 'Parábola',
    description:
      'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado...',
    image: {
      uri: Image.resolveAssetSource(ImageHqParabola).uri,
    },
    creators: [
      {
        id: 1,
        image: {
          uri: Image.resolveAssetSource(ImageStanLee).uri,
        },
      },
      {
        id: 2,
        image: {
          uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Wolverine - Origem',
    description:
      'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002',
    image: {
      uri: Image.resolveAssetSource(ImageCapaOrigemPorJoeQuesada).uri,
    },
    creators: [
      {
        id: 3,
        image: {
          uri: Image.resolveAssetSource(ImageStanLee).uri,
        },
      },
      {
        id: 4,
        image: {
          uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Thor - Vikings',
    description:
      'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite!',
    image: {
      uri: Image.resolveAssetSource(ImageHqThor).uri,
    },
    creators: [
      {
        id: 5,
        image: {
          uri: Image.resolveAssetSource(ImageStanLee).uri,
        },
      },
      {
        id: 6,
        image: {
          uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Em Busca do Poder',
    description:
      'Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.',
    image: {
      uri: Image.resolveAssetSource(ImageHqThanos).uri,
    },
    creators: [
      {
        id: 7,
        image: {
          uri: Image.resolveAssetSource(ImageStanLee).uri,
        },
      },
      {
        id: 8,
        image: {
          uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
        },
      },
    ],
  },
];

export const ComicsList: ComicList[] = [
  {
    id: 1,
    name: 'Parábola',
    description:
      'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado...',
    image: {
      uri: Image.resolveAssetSource(ImageHqParabola).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedHqParabola).uri,
      },
    },
    avalableStores: [
      {
        id: 1,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmazonLogo).uri,
          },
        },
      },
      {
        id: 2,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
          },
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Wolverine - Origem',
    description:
      'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002',
    image: {
      uri: Image.resolveAssetSource(ImageCapaOrigemPorJoeQuesada).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedHqWolverine).uri,
      },
    },
    avalableStores: [
      {
        id: 3,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmazonLogo).uri,
          },
        },
      },
      {
        id: 4,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
          },
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Thor - Vikings',
    description:
      'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite!',
    image: {
      uri: Image.resolveAssetSource(ImageHqThor).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedHqThor).uri,
      },
    },
    avalableStores: [
      {
        id: 5,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmazonLogo).uri,
          },
        },
      },
      {
        id: 6,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
          },
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Em Busca do Poder',
    description:
      'Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.',
    image: {
      uri: Image.resolveAssetSource(ImageHqThanos).uri,
      croped: {
        uri: Image.resolveAssetSource(ImageCropedHqThanos).uri,
      },
    },
    avalableStores: [
      {
        id: 7,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmazonLogo).uri,
          },
        },
      },
      {
        id: 8,
        store: {
          image: {
            uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
          },
        },
      },
    ],
  },
];

export const topFilms: TopFilms[] = [
  {
    id: 1,
    name: 'Guerra Infinita',
    description:
      'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.',
    image: {
      uri: Image.resolveAssetSource(ImageAvangersInfinityWar).uri,
    },
    persons: [
      {
        id: 1,
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
      },
      {
        id: 2,
        image: {
          uri: Image.resolveAssetSource(ImageIronSpider).uri,
        },
      },
      {
        id: 3,
        image: {
          uri: Image.resolveAssetSource(ImageHulk).uri,
        },
      },
      {
        id: 4,
        image: {
          uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
        },
      },
      {
        id: 5,
        image: {
          uri: Image.resolveAssetSource(ImageCaptainMarvel).uri,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Capitão América',
    description:
      'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
    image: {
      uri: Image.resolveAssetSource(ImageCaptainAmerica).uri,
    },
    persons: [
      {
        id: 6,
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
      },
      {
        id: 7,
        image: {
          uri: Image.resolveAssetSource(ImageIronSpider).uri,
        },
      },
      {
        id: 8,
        image: {
          uri: Image.resolveAssetSource(ImageHulk).uri,
        },
      },
      {
        id: 9,
        image: {
          uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
        },
      },
      {
        id: 10,
        image: {
          uri: Image.resolveAssetSource(ImageCaptainMarvel).uri,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Thor',
    description:
      'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.',
    image: {
      uri: Image.resolveAssetSource(ImageThorMovie).uri,
    },
    persons: [
      {
        id: 11,
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
      },
      {
        id: 12,
        image: {
          uri: Image.resolveAssetSource(ImageIronSpider).uri,
        },
      },
      {
        id: 13,
        image: {
          uri: Image.resolveAssetSource(ImageHulk).uri,
        },
      },
      {
        id: 14,
        image: {
          uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
        },
      },
      {
        id: 15,
        image: {
          uri: Image.resolveAssetSource(ImageCaptainMarvel).uri,
        },
      },
    ],
  },
];

export const filmsList: FilmsList = {
  release: [
    {
      id: 1,
      name: 'Homem de Ferro',
      description:
        'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado...',
      image: {
        uri: Image.resolveAssetSource(ImageIronManOne).uri,
        croped: {
          uri: Image.resolveAssetSource(ImageCropedIronMan).uri,
        },
      },
    },
    {
      id: 2,
      name: 'Homem de Ferro 2',
      description:
        'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro...',
      image: {
        uri: Image.resolveAssetSource(ImageIronManTwo).uri,
        croped: {
          uri: Image.resolveAssetSource(ImageCropedIronManTwo).uri,
        },
      },
    },
    {
      id: 3,
      name: 'Thor',
      description:
        'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.',
      image: {
        uri: Image.resolveAssetSource(ImageThorMovie).uri,
        croped: {
          uri: Image.resolveAssetSource(ImageCropedThor).uri,
        },
      },
    },
    {
      id: 4,
      name: 'Capitão América',
      description:
        'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
      image: {
        uri: Image.resolveAssetSource(ImageCaptainAmerica).uri,
        croped: {
          uri: Image.resolveAssetSource(ImageCropedCaptainAmerica).uri,
        },
      },
    },
  ],
  cronology: [
    {
      id: 1,
      name: 'Capitão América',
      description:
        'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
      image: {
        uri: Image.resolveAssetSource(ImageCaptainAmerica).uri,
      },
    },
    {
      id: 2,
      name: 'Capitão Marvel',
      description:
        'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.',
      image: {
        uri: Image.resolveAssetSource(ImageCaptainMarvel).uri,
      },
    },
    {
      id: 3,
      name: 'Homem de Ferro',
      description:
        'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado...',
      image: {
        uri: Image.resolveAssetSource(ImageIronManOne).uri,
      },
    },
    {
      id: 4,
      name: 'Homem de Ferro 2',
      description:
        'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro...',
      image: {
        uri: Image.resolveAssetSource(ImageIronManTwo).uri,
      },
    },
  ],
};
