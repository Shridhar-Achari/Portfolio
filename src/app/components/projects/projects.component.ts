import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HttpService } from '../../http.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
httpService = inject(HttpService);
projects: Project[] = [];
ngOnInit() {
  // this.httpService.getProjects().subscribe((data: any) => {
  //   this.projects = data;
  //   console.log(this.projects);
  // });
  this.httpService.getProjects().subscribe({
    next:(data:any) => this.projects =data,
    error:(err) => console.error('Error loading projects:', err)
  });
}
}
