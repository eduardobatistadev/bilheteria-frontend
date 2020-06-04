import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventoCrudComponent} from './components/evento-crud/evento-crud.component'
import { HomeComponent } from './components/home/home.component';
import { EventoComponent } from './components/evento/evento.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { CasadeshowCrudComponent } from './components/casadeshow-crud/casadeshow-crud.component';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';
import { CasadeshowUpdateComponent } from './components/casadeshow-update/casadeshow-update.component';
import { CasadeshowDeleteComponent } from './components/casadeshow-delete/casadeshow-delete.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';

const routes: Routes = [
    {
    path: "",
    component: HomeComponent
    }, 
    {
    path: "eventos",
    component: EventoCrudComponent
    },
    {
    path: "eventos/cadastro",
    component: EventoCreateComponent
    },
    {
    path: "eventos/update/:id",
    component: EventoUpdateComponent
    },
    {
    path: "eventos/delete/:id",
    component: EventoDeleteComponent
    },
    {
    path: "casasdeshow",
    component: CasadeshowCrudComponent
    },
    {
    path: "casasdeshow/cadastro",
    component:CasadeshowCreateComponent
    },
    {
    path: "casasdeshow/update/:id",
    component: CasadeshowUpdateComponent
    },
    {
    path: "casasdeshow/delete/:id",
    component: CasadeshowDeleteComponent
    }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}