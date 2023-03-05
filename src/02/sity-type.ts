export interface HouseType {
    buildedAt: number;
    repaired: false;
    address: {
        number: number;
        street: {
            title: string;
        }
    }
}

export interface GovernmentBuildingType {
    type: "HOSPITAL" | 'FIRE-STATION'
    budget: number;
    staffCount: number;
    address: {
        number?: number;
        street: {
            title: string;
        }
    }
}

export interface CityType {
    title: string;
    houses: Array<HouseType>;
    governmentBuildings: Array<GovernmentBuildingType>;
    citizensNumber: number;
}

