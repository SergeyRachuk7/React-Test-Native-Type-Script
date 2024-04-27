
 type UsersType = {
    [key: string]: {id: number, name: string}
}



//  let users: UsersType = {
//    "101":  {id: 101, name: "Dimych" },
//    "3232312":  {id: 3232312,name:"Natasha"},
//    "1212":  {id: 1212,name: "Valera"}, 
//    "1":  {id:1, name: "Katya"}
// }

let users: UsersType



beforeEach(() => {
        users = {
    "101":  {id: 101, name: "Dimych" },
    "3232312":  {id: 3232312, name:"Natasha"},
    "1212":  {id: 1212,name: "Valera"}, 
    "1":  {id:1, name: "Katya"}
  }
})


test("should updete correspoding user",() => { 
  users['1'].name = "Katyusha"
  //  expect(users['1'].name).toBe("Katyusha");  

   expect(users['1']).toEqual({id: 1, name: "Katyusha"})
})  



test("should delete correspoding user",() => { 
  delete users['1'] 

   expect(users['1']).toBeUndefined()
})  




