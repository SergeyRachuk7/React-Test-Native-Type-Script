 export   type UserType = {
  name: string,
  hair: number 
  address: {city: string, house?: number}
} 


export type LapTopType = {
  title: string
} 

export type  UserWithLaptopType =  UserType & {
    laptop: LapTopType
}  

export function makeHairstyle(u: UserType, power: number) {
    const copy = { 
      ...u,    
      hair: u.hair / power 
    }
     
   return copy
} 


export function moveUser(u: UserWithLaptopType, city: string) {
    return  {  
      ...u,     
      address: {
        ...u.address,
        city: city
      }
    } 

    //  copy.address = {
    //   ...copy.address,
    //    city: city}        
}



export function upgradeUserLaptop (u: UserWithLaptopType, laptop: string) {
    return  {  
      ...u,     
      laptop: {
        ...u.laptop,
        title: laptop
      }
    } 

    //  copy.address = {
    //   ...copy.address,
    //    city: city}        
}

