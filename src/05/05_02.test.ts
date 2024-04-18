import { getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, createMessages } from './05_02';


import { CityType } from '../02/02_02';
// import { demoLishHousesOnTheStreet, getBuildingsWithStaffCountGreater } from './04_2';

let city: CityType; 

beforeEach(()=> { 
  city = {
    title: "New York",
    houses: [
      {id: 1, buildedAt: 2012, repaired: false,
    address: {
      number: 100, 
      street: {
        title: "White street"} 
      }
    }, 
     {id: 2, buildedAt: 2008, repaired: false,
    address: {
      number: 100, 
      street: {
        title: "Happy street"} 
      }
    },  
     {id: 3, buildedAt: 2020, repaired: false,
    address: {
      number: 101, 
      street: {
        title: "Happy street"} 
      }
    }, 
],
    governmentBuildings: [
      {type: 'HOSPITAL',
       budget: 200000, staffCount: 200,
     address: {
      street: {
           title: "Central Str"} ,number: 12
         }
       }, 
       {type: 'FIRE-STATION'
       , budget: 500000, staffCount: 1000,
     address: {
        street: {
           title: "South Str"},number: 12,
         }
       },
    ],
    citizensNumber: 1000000
  }
})




test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings); 


    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streets = getStreetsTitlesOfHouses(city.houses);
      
    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})



test("create greating messages for streets", () => {
   let massages = createMessages(city.houses); 
   expect(massages.length).toBe(3);
   expect(massages[0]).toBe("Hello guys from White street"); 
   expect(massages[1]).toBe("Hello guys from Happy street"); 
   expect(massages[2]).toBe("Hello guys from Happy street"); 
}) 




