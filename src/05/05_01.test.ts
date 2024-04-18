import { ManType, createGretingMessege } from './05_01';

let people: Array<ManType> = [
] 

beforeEach(() => { 
   people = [  
     {name: "Roman Ivanov", age: 33},
     {name: "Alexander Petrov", age: 24},
     {name: "Ivan Kozak", age: 18},
] 

}) 

test("should  get  array of greeting messages", ()=> {
     const massages = createGretingMessege(people); 
    
     expect(massages.length).toBe(3); 
     expect(massages[0]).toBe("Hello  Roman. Welcom to  IT-Incubator") 
     expect(massages[1]).toBe("Hello  Alexander. Welcom to  IT-Incubator") 
     expect(massages[2]).toBe("Hello  Ivan. Welcom to  IT-Incubator") 
})  
