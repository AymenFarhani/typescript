import { Project } from "./project";

  
  export class ProjectManager {
    private projects: Project[] = [];
  
    createProject(project: Project) {
      this.projects.push(project);
    }
  
    getProject(id: number): Project | undefined {
      return this.projects.find(project => project.id === id);
    }
  
    getAllProjects(): Project[] {
      return [...this.projects];
    }
  
    updateProject(id: number, updatedData: Partial<Omit<Project, 'id'>>): Project | undefined {
      const project = this.getProject(id);
      if (project) {
        Object.assign(project, updatedData);
        return project;
      }
      return undefined;
    }
  
    deleteProject(id: number): boolean {
      const index = this.projects.findIndex(project => project.id === id);
      if (index !== -1) {
        this.projects.splice(index, 1);
        return true;
      }
      return false;
    }
  }
