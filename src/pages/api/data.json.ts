import type { APIRoute } from "astro";

export interface dataItem {
  title: string;
  url: string;
  images: {
    port: string;
    projectImages: string | string[];
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
    title: "JC Ident",
    url: "/",
    images: { port: "src/assets/img/Reel_Port-1.gif", projectImages: [] },
    description: "This video is an introduction for my showreel. I have included part of the process from storyboard to final clip.",
    credits: {
      direction: "Juanlu Castro",
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
    },
  },
  {
    title: "Graf 2018",
    url: "/",
    images: { port: "src/assets/img/GRAF_19_Port_01.gif", projectImages: [] },
    description: "",
  },
  {
    title: "Graf 2020",
    url: "/",
    images: { port: "src/assets/img/GRAF_20_Port_4.gif", projectImages: [] },
    description: "",
  },
  {
    title: "DHO",
    url: "/",
    images: { port: "src/assets/img/DHO.gif", projectImages: [] },
    description: "",
  },
  {
    title: "Audi",
    url: "/",
    images: { port: "src/assets/img/okinawa_AE.gif", projectImages: [] },
    description: "",
  },
  {
    title: "Loops",
    url: "/",
    images: { port: "src/assets/img/Gif_Port.gif", projectImages: [] },
    description: "",
  },
  {
    title: "Your planet sucks",
    url: "/projects/your-planet-sucks",
    images: { port: "src/assets/img/00-YPS_port.gif", projectImages: [] },
    description: [`Your Planet Sucks is a creative studio based in Barcelona focused on 3D illustration and animation, and works on odd and different projects. I've made a few little animations for the upcoming website.`],
    credits: {
      direction: ["Juanlu Castro & Antonio Hitos"],
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
     
    },
  },
  {
    title: "Weird Walk",
    url: "/projects/weird-walk",
    images: { port: "src/assets/img/00-YPS_port.gif", projectImages: [] },
    description: [`Weird Walk is a piece made from several loops posted on Instagram. The main intention was to make an "exquisite corpse", posting a clip based on the previous every two days.`, `Finally, I made the entire composition with all the clips, creating a big loop.`],
    credits: { 
      direction: "Juanlu Castro",
      design: "Juanlu Castro",
      animation: "Juanlu Castro",
      sound: "Juanlu Castro",
    },
  },
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(data));
};
