import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { NuevaOfertaComponent } from './pages/nueva-oferta/nueva-oferta.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nueva-oferta',
    component: NuevaOfertaComponent
  },
  {
    path: 'oferta/:id',
    component: OfertaComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
