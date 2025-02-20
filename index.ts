import { Project } from "./project";
import { ProjectManager } from "./projectManager";


let nextId : number  = 1;

  // Example usage:
  const manager = new ProjectManager();
  const project1: Project = {id:nextId++, title:"Project A", cost:1000, startDate:new Date("2025-01-01")};
  manager.createProject(project1);
  const project2: Project = {id:nextId++, title:"Project B", cost:1500, startDate:new Date("2023-01-01")};
  manager.createProject(project2);
  const project3: Project = {id:nextId++, title:"Project C", cost:1250, startDate:new Date("2020-12-06")};
  manager.createProject(project3);
  console.log(manager.getAllProjects());
  console.log("====================================");
  manager.updateProject(project1.id, { cost: 1200 });
  console.log(manager.getProject(project1.id));
  console.log("====================================");
  manager.deleteProject(project3.id);
  console.log(manager.getAllProjects());