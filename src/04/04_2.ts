import { CityType, GovernmentBuildingsType } from './../02/02_02';


export function demoLishHousesOnTheStreet (city: CityType, street: string) {
    city.houses =  city.houses.filter(h => h.address.street.title !== street )
} 


export const getBuildingsWithStaffCountGreater = (buldings: Array<GovernmentBuildingsType> ,number: number ) => {
     return buldings.filter(b => b.staffCount > number)
}