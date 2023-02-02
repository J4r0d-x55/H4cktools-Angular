import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReconnaissanceComponent } from './Reconnaissance/reconnaissance.component';

const routes: Routes = [{ path: '', component: ReconnaissanceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
