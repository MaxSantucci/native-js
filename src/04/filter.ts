import {CityType, GovernmentBuildingType} from "../02/sity-type";

export type coursesType = {
   title: string;
   price: number;
}

const courses = [
   {title: 'css', price: 140},
   {title: 'react', price: 250},
   {title: 'js', price: 150},
]

const chipPredicate = (courses: coursesType) => {
   return courses.price < 160;
}

const chipCourses = [
   {title: 'css', price: 140},
   {title: 'js', price: 150},
]

export function demolishHousesOnTheStreet(city: CityType, street: string) {
   city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
   return buildings.filter(h => h.staffCount > number)
}