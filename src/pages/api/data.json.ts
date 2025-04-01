import type { APIRoute } from "astro";

export const baseUrl = import.meta.env.BASE_URL;

export interface image {
  url: string;
  alt: string;
}
export interface dataItem {
  id: number;
  title: string;
  url: string;
  images: {
    port: string;
    projectImages: image | image[];
  };
  videos?: string | string[];
  links?: string | string[];
  description: string | string[];
  credits?: {
    direction?: string | string[];
    design?: string | string[];
    animation?: string | string[];
    illustration?: string | string[];
    music?: string | string[];
    sound?: string | string[];
    client?: string | string[];
    cleanUp?: string | string[];
    story?: string | string[];
  };
}

const data: dataItem[] = [
  {
    id: 3,
    title: "JC Ident",
    url: `${baseUrl}/projects/jc-ident`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415343/juanlu-castro-animation/img-port/tv-jc-ident-port_we3vgv.gif",
      projectImages: [
        { url: "/src/assets/img/reel-poster.png", alt: "" },
        { url: "/src/assets/img/tv-jc-ident-port.gif", alt: "" },
        { url: "/src/assets/img/tv-jc-ident-port.gif", alt: "" },
        { url: "/src/assets/img/tv-jc-ident-port.gif", alt: "" },
        { url: "/src/assets/img/reel-poster.png", alt: "" },
      ],
    },
    description: [
      `This video is an introduction for my showreel. I have included part of the process from storyboard to final clip.`,
    ],
    credits: {
      direction: "Juanlu Castro",
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
      music: "Raúl Burrueco",
      sound: "Raúl Burrueco",
    },
  },
  {
    id: 9,
    title: "Graf 2018",
    url: `${baseUrl}/projects/graf-2018`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415337/juanlu-castro-animation/img-port/graf-2018-port_gnv8xy.gif",
      projectImages: [],
    },
    description: [
      `GRAF is a small press and independent edition festival, where small and medium editors, self-edition collectives, graphic artists and fanzines have a place. It takes place since 2013, alternately in Madrid and Barcelona.`,
      `I made these four animations promoting the application period for editors, artists, collectives or cartoonist who are interested in join to next edition.`,
    ],
    credits: {
      direction: `Juanlu Castro`,
      design: `Juanlu Castro`,
      animation: `Juanlu Castro`,
      illustration: `Juanlu Castro`,
    },
  },
  {
    id: 6,
    title: "Graf 2019",
    url: `${baseUrl}/projects/graf-2019`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415337/juanlu-castro-animation/img-port/graf-2019-port_yhtqki.gif",
      projectImages: [],
    },
    description: [
      `In GRAF 2019 Barcelona edition, we made an animated version of the poster campaign designed by Lorenzo Montatore which was shown on screens inside the event, and also in social media profiles.`,
    ],
    credits: {
      direction: `Juanlu Castro`,
      animation: `Juanlu Castro`,
      illustration: `Lorenzo Montatore`,
    },
  },
  {
    id: 7,
    title: "Graf 2020",
    url: `${baseUrl}/projects/graf-2020`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415341/juanlu-castro-animation/img-port/graf-2020-port_da4awg.gif",
      projectImages: [],
    },
    description: [
      `Animated poster version for GRAF 2020 Barcelona by Marta Cartu. Unfortunately, it was never shown at the festival due to COVID-19.`,
    ],
    credits: {
      direction: `Juanlu Castro`,
      animation: `Juanlu Castro`,
      illustration: `Marta Cartu`,
      sound: `Raul Burrueco`,
      music: `Raul Burrueco`,
    },
  },
  {
    id: 2,
    title: "DHO",
    url: `${baseUrl}/projects/DHO`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415336/juanlu-castro-animation/img-port/DHO-port_qppreu.gif",
      projectImages: [],
    },
    description: [
      `A boy spends his time looking for food in a square world until he discovers a mysterious thing.`,
      `DHO is an animated short film based on a comic book by Lorenzo Montatore.`,
    ],
    credits: {
      direction: `Juanlu Castro & Lorenzo Montatore`,
      animation: `Juanlu Castro`,
      illustration: `Lorenzo Montatore`,
      music: `Javier Colilla Rayon`,
      sound: `Javier Colilla Rayon`,
      cleanUp: `Juanlu Castro`,
      story: `Lorenzo Montatore`,
    },
  },
  {
    id: 10,
    title: "Loops",
    url: `${baseUrl}/projects/loops`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415339/juanlu-castro-animation/img-port/loops-port_y170tm.gif",
      projectImages: [],
    },
    description: [`This is a compilation of gifs I made just for fun.`],
    credits: {
      illustration: "Juanlu Castro",
      animation: "Juanlu Castro",
    },
  },
  {
    id: 4,
    title: "Hoops",
    url: `${baseUrl}/projects/hoops`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415338/juanlu-castro-animation/img-port/hoops-port_evnayf.gif",
      projectImages: [],
    },
    description: [``],
    credits: {
      direction: "Genie Espinosa",
      illustration: "Genie Espinosa",
      animation: "Juanlu Castro",
    },
  },
  {
    id: 8,
    title: "Weird Walk",
    url: `${baseUrl}/projects/weird-walk`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415344/juanlu-castro-animation/img-port/weird-walk-port_ukxc1r.gif",
      projectImages: [],
    },
    description: [
      `Weird Walk is a piece made from several loops posted on Instagram. The main intention was to make an "exquisite corpse", posting a clip based on the previous every two days.`,
      `Finally, I made the entire composition with all the clips, creating a big loop.`,
    ],
    credits: {
      direction: "Juanlu Castro",
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
      sound: "Juanlu Castro",
    },
  },
  {
    id: 5,
    title: "Wallapop",
    url: `${baseUrl}/projects/wallapop`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415343/juanlu-castro-animation/img-port/wallapop-port_cdg7ln.gif",
      projectImages: [],
    },
    description: [``],
    credits: {
      direction: "Tres Studio",
      story: "Pietro Zoli",
      illustration: "Ivan Mesaros",
      animation: "Juanlu Castro",
    },
  },
  {
    id: 1,
    title: "Nuestra casa se asa",
    url: `${baseUrl}/projects/nuestra-casa-se-asa`,
    images: {
      port: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1743415340/juanlu-castro-animation/img-port/nuestra-casa-se-asa-port_zwl2ih.gif",
      projectImages: [],
    },
    description: [``],
    credits: {
      direction: "Juanlu Castro",
      design: "Juanlu Castro",
      story: "Lorenzo Montatore",
      animation: "Juanlu Castro",
      cleanUp: "Juanlu Castro",
      music: "Juanlu Castro",
      sound: "Juanlu Castro",
    },
  },
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(data));
};
