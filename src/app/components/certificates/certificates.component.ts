import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
 httpService = inject(HttpService);
 certificates: any[] = [];
ngOnInit() {
    this.httpService.getCertificate().subscribe({
      next: (data:any) => this.certificates = data,
      error: (err) => console.error('Error loading contact data:', err)
    });
}
}
