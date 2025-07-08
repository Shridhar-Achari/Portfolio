import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
httpService = inject(HttpService);
  info:any; 
  // contact: Contact[] = [];
  contact: any;
  ngOnInit() {
    this.httpService.getAboutInfo().subscribe((data:any) => {
      this.info = data;
      // console.log(this.info);
    });
  }
}
