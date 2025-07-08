import { Component, inject, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpService } from '../../http.service';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent,CertificatesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
httpService=inject(HttpService);
info:any;
ngOnInit() {
  this.httpService.getAboutInfo().subscribe((data:any) => {
    this.info = data;
    // console.log(this.info);
  }); 
}
}
