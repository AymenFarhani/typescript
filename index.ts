
import { StudentManager } from './studentManager';
import { Project } from "./project";
import { ProjectManager } from "./projectManager";
import { CarManager } from './carManager';


let nextId : number  = 1;

  // Example Project:
  const projectManager = new ProjectManager();
  const project1: Project = {id:nextId++, title:"Project A", cost:1000, startDate:new Date("2025-01-01")};
  projectManager.createProject(project1);
  const project2: Project = {id:nextId++, title:"Project B", cost:1500, startDate:new Date("2023-01-01")};
  projectManager.createProject(project2);
  const project3: Project = {id:nextId++, title:"Project C", cost:1250, startDate:new Date("2020-12-06")};
  projectManager.createProject(project3);
  console.log(projectManager.getAllProjects());
  console.log("-----------------------------------");
  projectManager.updateProject(project1.id, { cost: 1200 });
  console.log(projectManager.getProject(project1.id));
  console.log("-----------------------------------");
  projectManager.deleteProject(project3.id);
  console.log(projectManager.getAllProjects());

  console.log("====================================");
  console.log("====================================");
// Example Student:
const studentManager = new StudentManager();
studentManager.createStudent({ id: 1, fullName: "John Doe", email: "john@example.com" });
studentManager.createStudent({ id: 2, fullName: "Jane Smith", email: "jane@example.com" });

console.log("-----------------------------------");
studentManager.getStudent(1); // Retrieve the student with id 1

console.log("-----------------------------------");
studentManager.updateStudent(1, { fullName: "Johnathan Doe" }); // Update student with id 1
console.log("-----------------------------------");
studentManager.deleteStudent(2); 

console.log("====================================");
console.log("====================================");

// Example usage
const carManager = new CarManager();
carManager.createCar({ id: 1, mode: 'Sedan', marque: 'Toyota', price: 20000, constructionDate: new Date('2019-01-01') });
carManager.createCar({ id: 2, mode: 'SUV', marque: 'Ford', price: 25000, constructionDate: new Date('2020-03-15') });

carManager.getCar(1); // Retrieve the car with id 1
carManager.updateCar(1, { price: 21000 }); // Update car with id 1, changing its price
carManager.deleteCar(2); // Delete car with id 2