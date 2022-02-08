import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'header' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
