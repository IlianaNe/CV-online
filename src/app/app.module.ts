import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule , LottieCacheModule  } from 'ngx-lottie';
import { AppRoutingModule } from './app-routing.module';
import player from 'lottie-web';

import { CertificatesService } from './services/certificates.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { EducationComponent } from './components/education/education.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { DatabaseComponent } from './components/hardskills/database/database.component';

import  {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import { HardskillsComponent } from './components/hardskills/hardskills.component';
import { ProgrammingWebComponent } from './components/hardskills/programming-web/programming-web.component';
import { FrameworksComponent } from './components/hardskills/frameworks/frameworks.component';
import { SoftwareComponent } from './components/hardskills/software/software.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LanguageComponent } from './components/language/language.component';
import { AnimacionComponent } from './components/animacion/animacion.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    EducationComponent,
    CertificateComponent,
    HardskillsComponent,
    ProgrammingWebComponent,
    DatabaseComponent,
    FrameworksComponent,
    SoftwareComponent,
    ExperienciaComponent,
    LanguageComponent,
    AnimacionComponent,
    SoftskillsComponent,
    RedesSocialesComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    NgbModule,
    LottieCacheModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule
  ],
  providers: [CertificatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
