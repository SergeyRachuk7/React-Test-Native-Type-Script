export type ManType = {
  name: string 
  age: number
} 

const people: Array<ManType> = [
  {name: "Roman Ivanov", age: 33},
  {name: "Alexander Petrov", age: 24},
  {name: "Ivan Kozak", age: 18},
] 


const seregaTransformator = (man: ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName:man.name.split("")[1]
})  

 
const devs1 = [{
  stack: ["css, html", "js", "tdd", "react"],
  firstName: "Roman", lastName:"Ivanov" 
},
{
  stack: ["css, html", "js", "tdd", "react"],
  firstName: "Alexander", lastName:"Petrov" 
},
{
  stack: ["css, html", "js", "tdd", "react"],
  firstName: "Ivan", lastName:"Kozak" 
}, 
]   

seregaTransformator(people[0])
const devs2 = [ 
  seregaTransformator(people[0]), 
  seregaTransformator(people[1]),  
  seregaTransformator(people[2])  
]   


const devs3 = people.map(seregaTransformator) 
const devs4 = people.map((man: ManType) =>  ({
        stack: ["css, html", "js", "tdd", "react"],
         firstName: man.name.split(" ")[0],  
         lastName: man.name.split(" ")[1],  
}))   



 const massages = people.map(man => `Hello  ${man.name.split(" ")[0]}. Welcom to  IT-Incubator`)

export const createGretingMessege = (people: Array<ManType>) => {
    return  people.map(man => `Hello  ${man.name.split(" ")[0]}. Welcom to  IT-Incubator` )
 }