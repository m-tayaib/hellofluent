import Countries from "../data/flagNames_Images.json"
type countriesTypes = {
    id: number,
    name: string,
    flagImage: string
}

export const countriesData : countriesTypes[] = [...Countries]