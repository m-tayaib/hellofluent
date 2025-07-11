import language_card from "../data/larnguageCard.json";

export interface LanguageCard {
  id: number;
  img: string;
  username: string;
  fromLanguage: string;
  toLanguage: string;
  countryFlag: string;
  flagImage: string;
}

export const languageCard : LanguageCard[] = [...language_card]