import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReconnaissanceComponent } from './Reconnaissance/reconnaissance.component';
import { NmapComponent } from './nmap/nmap.component';
import { NiktoComponent } from './nikto/nikto.component';
import { PingComponent } from './ping/ping.component';

@NgModule({
  declarations: [
    AppComponent,
    ReconnaissanceComponent,
    NmapComponent,
    NiktoComponent,
    PingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
