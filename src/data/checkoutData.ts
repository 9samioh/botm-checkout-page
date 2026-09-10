import type { Book, Address } from "../types/types";

export const testBooks: Book[] = [
  {
    id: "1111",
    title: "If Not You",
    author: "Ellen O’Clover",
    coverImg: "IfNotYou_291J439v.avif",
    price: 22.75,
  },
  {
    id: "1112",
    title: "Kiss Slay Replay",
    author: "Rachel Harrison",
    coverImg: "KissSlayReplay_rxwAK3VB.avif",
    price: 22.38,
  },
  {
    id: "1113",
    title: "The True Confessions of First Lady Freeman",
    author: "Deesha Philyaw",
    coverImg: "TheTrueConfessionsOfFirstLadyFreeman_hj1E0Zfz.avif",
    price: 27.2,
  },
  {
    id: "1114",
    title: "Fallow",
    author: "Sarah Anderson",
    coverImg: "Fallow_V6oAEWc2.avif",
    price: 28.47,
  },
];

export const testAddress: Address = {
  name: "Suki Oh",
  street: "1234 Kibble Ave.",
  city: "San Diego",
  state: "CA",
  zip: 92111,
};
