import { makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType } from "./10_01";


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