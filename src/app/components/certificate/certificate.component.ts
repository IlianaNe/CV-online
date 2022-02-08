import { Component, OnInit } from '@angular/core';
import { CertificatesService, Certificate } from '../../services/certificates.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  providers: [NgbCarouselConfig]
})
export class CertificateComponent implements OnInit {

  certificados: Certificate[] = [];

  constructor(private _certificadoService: CertificatesService, config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.certificados = this._certificadoService.getCertificates();
    console.log(this.certificados);
  }
}

