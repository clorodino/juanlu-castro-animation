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
}

const data: dataItem[] = [
  {
    title: "JC Ident",
    url: "/",
    images: { port: "src/assets/img/Reel_Port-1.gif", projectImages: [] },
    description: "",
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
    url: "/",
    images: { port: "src/assets/img/00-YPS_port.gif", projectImages: [] },
    description: [""],
  },
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(data));
};
