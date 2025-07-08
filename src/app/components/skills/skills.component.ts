import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
httpService = inject(HttpService);
skills: any[] = [];
ngOnInit() {
  this.httpService.getSkills().subscribe((data: any) => {
    this.skills = data;
    console.log(this.skills);
  });
}
}
