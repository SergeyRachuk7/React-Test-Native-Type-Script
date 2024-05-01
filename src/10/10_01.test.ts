import { title } from 'process';
import { addNewBooksToUser, makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, upgradeUserLaptop, UserType, UserWithBooksType, UserWithLaptopType, WithCompaniesType } from "./10_01";


test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev"
         }
    }
    
    const awesomeUser = makeHairstyle(user, 2)      
    
    user = awesomeUser; 

    // expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16) 
    expect(awesomeUser.address).toBe(user.address) 
})




test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         } 
    }
    
    const movedUser = moveUser(user, "Kharkiv") 
          
    expect(user).not.toBe(movedUser) 
    expect(user.address).not.toBe(movedUser.address)    
    expect(user.laptop).toBe(movedUser.laptop)    
    expect(movedUser.address.city).toBe("Kharkiv") 
})



test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         } 
    }
    
    const movedUser = moveUser(user, "Kharkiv") 
          
    expect(user).not.toBe(movedUser) 
    expect(user.address).not.toBe(movedUser.address)    
    expect(user.laptop).toBe(movedUser.laptop)    
    expect(movedUser.address.city).toBe("Kharkiv") 
})



test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         } 
    }
    
    const UserСopy = upgradeUserLaptop(user, "Macbook") 
          
    expect(user).not.toBe(UserСopy) 
    expect(user.address).toBe(UserСopy.address)    
    expect(user.laptop).not.toBe(UserСopy.laptop)    
    expect(UserСopy.laptop.title).toBe("Macbook")     
    expect(user.laptop.title).toBe("Hp")  
}) 



test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         }, 
         books: ["css", "html", "js", "react"] 
    }
    
    const userСopy = moveUserToOtherHouse(user, 99) 
          
    expect(user).not.toBe(userСopy) 
    expect(user.books).toBe(userСopy.books)    
    expect(user.laptop).toBe(userСopy.laptop)    
    expect(user.address).not.toBe(userСopy.address)     
    expect(userСopy.address.house).toBe(99)  
}) 


test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         }, 
         books: ["css", "html", "js", "react"] 
    }
    
    const userСopy = addNewBooksToUser(user, "ts") 
          
    expect(user).not.toBe(userСopy) 
    expect(user.laptop).toBe(userСopy.laptop)      
    expect(user.address).toBe(userСopy.address)      
    expect(user.books).not.toBe(userСopy.books)     
    expect(userСopy.books[4]).toBe("ts")     
    expect(user.books.length).toBe(4)  
}) 



test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         }, 
         books: ["css", "html", "js", "react"] 
    }
    
    const userСopy = updateBook(user, "js", "ts") 
          
    expect(user).not.toBe(userСopy) 
    expect(user.laptop).toBe(userСopy.laptop)      
    expect(user.address).toBe(userСopy.address)      
    expect(user.books).not.toBe(userСopy.books)     
    expect(userСopy.books[2]).toBe("ts")     
})




test("remove js book ", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         }, 
         books: ["css", "html", "js", "react"] 
    }
    
    const userСopy = removeBook(user, "js") 
          
    expect(user).not.toBe(userСopy) 
    expect(user.laptop).toBe(userСopy.laptop)      
    expect(user.address).toBe(userСopy.address)      
    expect(user.books).not.toBe(userСopy.books)     
    expect(userСopy.books[2]).toBe("react")     
})



test("remove company ", () => {
    let user: UserWithLaptopType & WithCompaniesType =  {
        name: "Dimych",
        hair: 32,
         address: {
          city: "Kiev", 
          house: 12
         }, 
         laptop: {
          title: "Hp"
         }, 
         companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-INCUBATOR"} ] 
    }
    
      const userCopy = updateCompanyTitle(user, 1, "Epam")  as UserWithLaptopType & WithCompaniesType 
    
      expect(user).not.toBe(userCopy) 
      expect(user.address).toBe(userCopy.address)    
      expect(user.companies).not.toBe(userCopy.companies)    
      expect(user.companies[0].title).not.toBe("EPAM")
})  



test("update company ", () => {    
      let companies = {
          "Dimych" : [{id: 1, title: "Епам"},{id: 2, title: "IT-INCUBATOR"}], 
          "Andrea":[{id: 2, title: "IT-INCUBATOR"}]
      }

   const copy = updateCompanyTitle2(companies, 'Dimych', 1, "EPAM") 

      expect(copy['Dimych']).not.toBe(companies["Dimych"]) 
      expect(copy['Dimych']).not.toBe(companies["Andrea"])  
      expect(copy['Dimych'][0].title).toBe("EPAM")
    

})
