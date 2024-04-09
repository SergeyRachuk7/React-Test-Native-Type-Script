import { GovernmentBuildingsType, CityType } from './../02/02_02';
import { HouseType } from '../02/02_02';

import {  StudentType } from '../02/02';
export const sum  = (a: number, b:number) => {  
  return a + b; 
}     


export const  addSkill =  (student: StudentType, skill: string) =>  {
  student.tehnologies.push({
    id: new Date().getTime(), 
    title:  skill
  })
}


export  function  addSkill2(st: StudentType, skill: string)    {
  st.tehnologies.push({
    id: new Date().getTime(), 
    title:  skill
  })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
} 

export const  doesStudentLiveIn = (s: StudentType, cityName: string) => {
     return s.address.city.title === cityName;  
}

export const addMoneyToBudget = (bulding: GovernmentBuildingsType, budget: number) => {
     bulding.budget += budget;
} 


export const repairHouse = ( houseType: HouseType) => { 
    houseType.repaired = true;
}  

export function toFireStaff (buildings: GovernmentBuildingsType, staffCountToFire: number) {
    buildings.staffCount -=  staffCountToFire;
}


export const toHireStaff = (buildings: GovernmentBuildingsType,  staffCountToHire : number )  =>   {
  buildings.staffCount += staffCountToHire;  
} 


export function createMessage(props: CityType) { 
  return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;

}
