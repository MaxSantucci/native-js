import {GovernmentBuildingType, HouseType} from "../02/sity-type";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
   return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
   return houses.map(h => h.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
   let callbackfn = (h: HouseType) => {
      return `hello gays from ${h.address.street.title}`
   }
   return houses.map(callbackfn)
}