import { StudentType } from './../02/02'; 
import { addSkill, doesStudentLiveIn, makeStudentActive } from './03';

let  student:  StudentType;  
  beforeEach(() => {
      student =  {
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
})


test("new tech should be added  to student", () => {   
       addSkill(student, "JS") 

      expect(student.tehnologies.length).toBe(4)
      expect(student.tehnologies[3].title).toBe("JS");      
      expect(student.tehnologies[3].id).toBeDefined();      
})   


test("student should be made active", () => {   
      expect(student.isActive).toBe(false); 

      makeStudentActive(student);

      expect(student.isActive).toBe(true);      
})   


test("does student lives in city?", () => {   
      expect(student.isActive).toBe(false); 

   let result1 = doesStudentLiveIn(student, "Paris"); 
   let result2 = doesStudentLiveIn(student, "Kiev"); 
      
      expect(result1).toBe(false);      
      expect(result2).toBe(true);      
})   
