import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
httpService = inject(HttpService);
info:any;
ngOnInit() {
  this.httpService.getAboutInfo().subscribe((data:any) => {
    this.info = data;
    // console.log(this.info);
  });
}
}
