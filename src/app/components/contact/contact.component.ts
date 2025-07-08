import { Component, inject, Input } from '@angular/core';
import { Contact } from '../../model/contact';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  httpService = inject(HttpService);
// contact: Contact[] = [];
 contact: any;
ngOnInit() {
  // this.httpService.getContact().subscribe((data: any) => {
  //   this.contact = data;
  //   console.log(this.contact);
  // });
    this.httpService.getContact().subscribe({
      next: (data) => this.contact = data,
      error: (err) => console.error('Error loading contact data:', err)
    });
}
}
