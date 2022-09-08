import {Cocktail} from "./cocktail";

export interface Hydra {
  "@context": string,
  "@id": string,
  "@type": string,
  "hydra:member": Cocktail[],
  "hydra:totalItems": number
}
