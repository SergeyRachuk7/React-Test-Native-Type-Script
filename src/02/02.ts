
type LocalCityType = {
    title: string 
    countryTitle: string 
}

type AddressType = {
    streetTitle: string 
    city: LocalCityType  

} 

type TechType = {
    id: number 
    title: string}

export type StudentType = { 
    id: number 
    age: number 
    name: string
    isActive: boolean    
    address: AddressType 
    tehnologies: Array<TechType>
}

export const student: StudentType  = { 
    id: 1,
    name: "Roma", 
    age: 32, 
    isActive: false,
    address: {
        streetTitle: "independence 7",
        city: {
          title: "Kiev", 
          countryTitle: "Ukraine"
        }
    }, 
    tehnologies: [
        {
          id: 1, 
          title: "HTML"
        }, 
                {
          id: 2, 
          title: "CSS"
        }, 
        {
          id: 3, 
          title: "React"
        },
    ]
}  




console.log(student.age);
console.log(student.name); 
console.log(student.address.city.title); 
console.log(student.tehnologies[2].title);
