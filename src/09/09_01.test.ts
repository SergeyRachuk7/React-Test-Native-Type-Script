
function  increaseAge (user: UserType)  {
    user.age = user.age + 1;
}

type UserType = {
  name: string,
  age: number 
  title: string 
  address: {title: string}
}

// test("refernce type test", () => { 

//     const address = {
//         title: "Kiev"
//     }
  
//     let user: UserType = {
//       name: 'Dimich',
//       age: 32, 
//       address: {
//           title: "Kiev"
//       }
//   }  
    
//     let user2: UserType = {
//         name: "Natacha",
//         age: 30,
//         address: user.address
//     }

//        user2.address.title = "Canada";   
//       expect(user.address).toBe(user2.address); 




// })

test("array type test", () => { 
    let users = [  
      {  
      name: 'Dimich',
      age: 32
    }, 
    {
      name: 'Dimich',
      age: 32 
    }
    ]
     let admins = users;

     admins.push({name: 'Bandyugan', age: 10});
    expect(users[2]).toEqual({name: 'Bandyugan', age: 10}) 

})


test("value type test", () => { 

     let usersCount = 100; 

     let adminsCount = usersCount;  

      adminsCount = 101

    // expect(users[2]).toEqual({name: 'Bandyugan', age: 10}) 

})



test("refernce type test", () => {  
     const address = {
          title: "Kiev"
      }
  
    let user: UserType = {
      name: 'Dimich',
      age: 1000, 
      address: address 
      
  } 
    
    // let addr = user.address

    let user2: UserType = {
        name: "Natacha",
        age: 30,
        address: address
    }

      address.title = "Canada City";

      expect(user.address).toBe(user2.address); 
      expect(user.address.title).toBe("Canada City");   
})



test("refernce type array test", () => {  
     const address = {
          title: "Kiev"
      }
  
    let user: UserType = {
      name: 'Dimich',
      age: 1000, 
      address: address 
      
  } 
    
    // let addr = user.address

    let user2: UserType = {
        name: "Natacha",
        age: 30,
        address: address
    }

      const users = [user, user2, {name: "Misha", age: 4, address: address}]

      const admins = [user, user2]

      admins[0].name = "Dmitry"


      expect(users[0].name).toBe("Dmitry"); 
      expect(user.name).toBe("Dmitry"); 
})


 test("sort array test", () => {

    const letters = ["c", "d", "a", "z", "e"]

    passportist(letters); 


    expect(letters).toEqual(["c", "d", "a", "z", "e"]) 

 } );


 function passportist(letters: any) {
      const copy =  [letters].sort() 
      console.log(copy);
 }



