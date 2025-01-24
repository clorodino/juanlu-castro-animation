import type { APIRoute } from "astro";

export interface image {
  url: string;
  alt: string;
}
export interface video {
  src: string;
  poster?: string;
  title: string;
}
export interface dataItem {
  id: number;
  title: string;
  url: string;
  images: {
    port: string;
    projectImages: image | image[];
  };
  videos?: video | video[];
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

// credits: {
//   direction: ``,
//   design: ``,
//   animation: ``,
//   illustration: ``,
//   music: ``,
//   sound: ``,
//   client: ``,
//   cleanUp: ``,
//   story: ``,
// },

const data: dataItem[] = [
  {
    id: 10,
    title: "JC Ident",
    url: "/projects/jc-ident",
    videos: [
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737645092/juanlu-castro-animation/jc-ident/jc-ident_bxzvwi.mp4",
        poster:
          "https://res.cloudinary.com/dtgwzogvc/image/upload/v1737649629/juanlu-castro-animation/jc-ident/jc-ident-poster_yileil_1_wodims.png",
        title: "Juanlu Castro Animation reel",
      },
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737649824/juanlu-castro-animation/jc-ident/process_a6krjg.mp4",
        poster: "",
        title: "Process",
      },
    ],
    images: {
      port: "src/assets/img/tv-jc-ident-port.gif",
      projectImages: [
        {
          url: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1737648537/juanlu-castro-animation/jc-ident/storyboard-1_gjb5dg.png",
          alt: "storyboard",
        },
        {
          url: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1737648537/juanlu-castro-animation/jc-ident/storyboard-2_pdjrwc.png",
          alt: "storyboard",
        },
        {
          url: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1737646206/juanlu-castro-animation/jc-ident/palette_khfo7n.png",
          alt: "palette",
        },
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
    url: "/projects/graf-2018",
    videos: [
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737721262/juanlu-castro-animation/graf-2018/graf-2018_e6fuza.mp4",
        poster: "",
        title: "",
      },
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737721260/juanlu-castro-animation/graf-2018/G_ndpgdq.mp4",
        poster: "",
        title: "",
      },
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737721260/juanlu-castro-animation/graf-2018/R_tnh87i.mp4",
        poster: "",
        title: "",
      },
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737721260/juanlu-castro-animation/graf-2018/A_bxnl1r.mp4",
        poster: "",
        title: "",
      },
      {
        src: "https://res.cloudinary.com/dtgwzogvc/video/upload/v1737721265/juanlu-castro-animation/graf-2018/F_vh9rkd.mp4",
        poster: "",
        title: "",
      },
    ],
    images: {
      port: "src/assets/img/graf-2018-port.gif",
      projectImages: [
        {
          url: "https://res.cloudinary.com/dtgwzogvc/image/upload/v1737721261/juanlu-castro-animation/graf-2018/rough_urvucl.gif",
          alt: "",
        },
      ],
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
    id: 7,
    title: "Graf 2019",
    url: "/projects/graf-2019",
    images: { port: "src/assets/img/graf-2019-port.gif", projectImages: [] },
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
    id: 6,
    title: "Graf 2020",
    url: "/projects/graf-2020",
    images: { port: "src/assets/img/graf-2020-port.gif", projectImages: [] },
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
    url: "/projects/DHO",
    images: { port: "src/assets/img/DHO-port.gif", projectImages: [] },
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
  // {
  //   title: "Ikigai",
  //   url: "/projects/ikigai",
  //   images: { port: "src/assets/img/okinawa_AE.gif", projectImages: [] },
  //   description: [
  //     `Ikigai is a Japanese concept that means "a reason for being". According to Japanese culture, everyone has an ikigai, and finding it requires a deep and lengthy search for oneself.`,
  //     `Audi celebrated its customer's birthday by inviting them to find their ikigai through a journey through the corners of the most traditional Japan.`,
  //   ],
  //   credits: {
  //     direction: `Ogilvy`,
  //     animation: `Juanlu Castro`,
  //     illustration: `Elena Serrato`,
  //   },
  // },
  {
    id: 3,
    title: "Loops",
    url: "/projects/loops",
    images: { port: "src/assets/img/loops-port.gif", projectImages: [] },
    description: [`This is a compilation of gifs I made just for fun.`],
    credits: {
      illustration: "Juanlu Castro",
      animation: "Juanlu Castro",
    },
  },
  {
    id: 11,
    title: "Your planet sucks",
    url: "/projects/your-planet-sucks",
    images: { port: "src/assets/img/YPS-port.gif", projectImages: [] },
    description: [
      `Your Planet Sucks is a creative studio based in Barcelona focused on 3D illustration and animation, and works on odd and different projects. I've made a few little animations for the upcoming website.`,
    ],
    credits: {
      direction: ["Juanlu Castro & Antonio Hitos"],
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
    },
  },
  {
    id: 4,
    title: "Hoops",
    url: "/projects/hoops",
    images: { port: "src/assets/img/hoops-port.gif", projectImages: [] },
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
    url: "/projects/weird-walk",
    images: { port: "src/assets/img/weird-walk-port.gif", projectImages: [] },
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
    url: "/projects/wallapop",
    images: { port: "src/assets/img/wallapop-port.gif", projectImages: [] },
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
    url: "/projects/nuestra-casa-se-asa",
    images: {
      port: "src/assets/img/nuestra-casa-se-asa-port.gif",
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
