interface Address {
   number?: number;
   street: {
      title: string;
   };
}

export interface HouseType {
   id?: number;
   buildedAt: number;
   repaired: boolean;
   address: Address;
}

export interface GovernmentBuildingType {
   type: "HOSPITAL" | "FIRE-STATION";
   budget: number;
   staffCount: number;
   address: Address;
}

export interface CityType {
   title: string;
   houses: Array<HouseType>;
   governmentBuildings: Array<GovernmentBuildingType>;
   citizensNumber: number;
}

