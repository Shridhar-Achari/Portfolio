import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from './model/project';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 http=inject(HttpClient);
  constructor() { }

  getAboutInfo() {
  //  return this.http.get('http://localhost:3000/about');
  return this.http.get('assets/about.json');
  }
  getSkills() {
   return this.http.get('assets/skills.json');
  }
  getProjects() {
    return this.http.get<Project>('assets/projects.json');
  }
  getContact() {
    return this.http.get('assets/contact.json');
  }
  getCertificate() {
    return this.http.get('assets/certificates.json');
  }
}
