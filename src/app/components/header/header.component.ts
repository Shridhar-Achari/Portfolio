import { Component, inject, Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
httpService = inject(HttpService);
  info:any; 
  // contact: Contact[] = [];
  contact: any;
  ngOnInit() {
    this.httpService.getAboutInfo().subscribe((data:any) => {
      this.info = data;
      // console.log(this.info);
    });
    this.httpService.getContact().subscribe((data:any) => {
      this.contact = data;
      // console.log(this.contact);
    });
  }
}
