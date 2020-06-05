import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EventoComponent } from './components/evento/evento.component';
import { CasadeshowComponent } from './components/casadeshow/casadeshow.component';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { DetalhesEventoComponent } from './components/detalhes-evento/detalhes-evento.component';
import { RouteConfigLoadEnd } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EventoCrudComponent } from './components/evento-crud/evento-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { HttpClientModule } from '@angular/common/http';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';
import { CasadeshowCrudComponent } from './components/casadeshow-crud/casadeshow-crud.component';
import {FormsModule} from '@angular/forms';
import { CasadeshowReadComponent } from './components/casadeshow-read/casadeshow-read.component';
import { CasadeshowUpdateComponent } from './components/casadeshow-update/casadeshow-update.component';
import { CasadeshowDeleteComponent } from './components/casadeshow-delete/casadeshow-delete.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventoComponent,
    CasadeshowComponent,
    ModalComponent,
    AlertComponent,
    DetalhesEventoComponent,
    EventoCrudComponent,
    EventoCreateComponent,
    CasadeshowCreateComponent,
    CasadeshowCrudComponent,
    CasadeshowReadComponent,
    CasadeshowUpdateComponent,
    CasadeshowDeleteComponent,
    EventoReadComponent,
    EventoUpdateComponent,
    CartStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
