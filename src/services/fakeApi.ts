import { Image } from 'react-native';

import {
  ImageDoctorStrange,
  ImageVision,
  ImageWandaMaximoff,
  ImageUltron,
  ImageCivilWar,
  ImageInfinityWar,
  ImageUltimato,
  ImageWandaVision,
  ImageIronSpider,
  ImageHulk,
  ImageThanos,
  ImageHqParabola,
  ImageStanLee,
  ImageMoebiusIlustrador,
  ImageCapaOrigemPorJoeQuesada,
  ImageHqThor,
  ImageHqThanos,
} from '../assets/images';
import {
  ImageCropedHulk,
  ImageCropedIronSpider,
  ImageCropedThanos,
  ImageCropedWandaMaximoff,
  ImageCropedHqParabola,
  ImageCropedHqThanos,
  ImageCropedHqThor,
  ImageCropedHqWolverine,
} from '../assets/images/croped-images';
import { IconAmazonLogo, IconAmericanasLogo } from '../assets/icons';
import { TopHero, PersonsList, TopComics, ComicList } from '../models';

export function getTopHeroes(): Promise<TopHero[]> {
  return new Promise(resolve => {
    const heroes: TopHero[] = [
      {
        name: 'Wanda Maximoff',
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
        description:
          'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
      {
        name: 'Visão',
        image: {
          uri: Image.resolveAssetSource(ImageVision).uri,
        },
        description:
          'Visão é um sintezóide – um andróide composto de sangue e órgãos sintéticos. Ele foi criado por Ultron para destruir os Vingadores, mas ao invés disso ele se voltou contra seu “pai” e faz parte da equipe de super-heróis desde então.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
      {
        name: 'Doutor Estranho',
        image: {
          uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
        },
        description:
          'Nascido em 1930, Strange era um neurocirurgião incrível e, por isso, também era extremamente arrogante. No auge de sua carreira, ele sofre um acidente de carro e acabou danificando os nervos das mãos.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
    ];

    return resolve(heroes);
  });
}

export function getPersonsList(): Promise<PersonsList[]> {
  return new Promise(resolve => {
    const persons: PersonsList[] = [
      {
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

    resolve(persons);
  });
}

export function getTopComics(): Promise<TopComics[]> {
  return new Promise(resolve => {
    const comics: TopComics[] = [
      {
        name: 'Parábola',
        description:
          'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado...',
        image: {
          uri: Image.resolveAssetSource(ImageHqParabola).uri,
        },
        creators: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageStanLee).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
            },
          },
        ],
      },
      {
        name: 'Wolverine - Origem',
        description:
          'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002',
        image: {
          uri: Image.resolveAssetSource(ImageCapaOrigemPorJoeQuesada).uri,
        },
        creators: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageStanLee).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
            },
          },
        ],
      },
      {
        name: 'Thor - Vikings',
        description:
          'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite!',
        image: {
          uri: Image.resolveAssetSource(ImageHqThor).uri,
        },
        creators: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageStanLee).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
            },
          },
        ],
      },
      {
        name: 'Em Busca do Poder',
        description:
          'Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.',
        image: {
          uri: Image.resolveAssetSource(ImageHqThanos).uri,
        },
        creators: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageStanLee).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageMoebiusIlustrador).uri,
            },
          },
        ],
      },
    ];

    resolve(comics);
  });
}

export function getComicList(): Promise<ComicList[]> {
  return new Promise(resolve => {
    const persons: ComicList[] = [
      {
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
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmazonLogo).uri,
              },
            },
          },
          {
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
              },
            },
          },
        ],
      },
      {
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
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmazonLogo).uri,
              },
            },
          },
          {
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
              },
            },
          },
        ],
      },
      {
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
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmazonLogo).uri,
              },
            },
          },
          {
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
              },
            },
          },
        ],
      },
      {
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
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmazonLogo).uri,
              },
            },
          },
          {
            store: {
              image: {
                uri: Image.resolveAssetSource(IconAmericanasLogo).uri,
              },
            },
          },
        ],
      },
    ];

    resolve(persons);
  });
}
