
 export   type UserType = {
  name: string,
  hair: number 
  address: {city: string, house?: number}
} 


export type LapTopType = {
  title: string
} 

export type UserWithLaptopType =  UserType & {
    laptop: LapTopType
} 


export type UserWithBooksType =  UserType & {
    books: Array<string> 
} 

export type CompanyType = { id: number, title: string } 
  export type WithCompaniesType = {
    companies: Array<CompanyType>
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

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return  {  
      ...u,     
      address: {
        ...u.address,
        house: house
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



export function addNewBooksToUser (u: UserWithLaptopType  & UserWithBooksType, newBook: Array<string>) {
    return {  
        ...u, 
        books: [...u.books, newBook] 
      }      
}


export const updateBook =  (u: UserWithLaptopType & UserWithBooksType,
    oldBook: string,
     newBook: string) => ({       
      ...u, 
        books: u.books.map(b => b === oldBook ? newBook : b)             
    })                             
                          


export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
     bookForDelete: string) => ({       
      ...u, 
        books: u.books.filter(b => b !== bookForDelete)             
    })                             
       

export const updateCompanyTitle = (user: WithCompaniesType, 
   companyId: number,
   newTitle: string) =>  {
  const copy: WithCompaniesType = {
    ...user, 
      companies: user.companies.map(c =>  c.id === companyId ? {...c, title: newTitle} : c)
  }
  return copy
}  



// export const updateCompanyTitle2 = (user: CompanyType, 
//    companyId: number,
//    newTitle: string) =>  {
//   const copy:CompanyType = {
//     ...user, 
//       companies: user.companies.map(c =>  { 
//           if(c.id, === companyId) {
//             return {...c, title: newTitle};
//           } else {
//              return c
//           }

//         return c
//       })
//   }
//   return copy
// }  



export const updateCompanyTitle2 = (companies: {[key: string]:Array<CompanyType> },
   userName:string, companyId:number, newTitle: string ) => {
       let companyCopy = {...companies} 
        companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?{
          ...c, title:newTitle} : c)
        

       return companyCopy;
}