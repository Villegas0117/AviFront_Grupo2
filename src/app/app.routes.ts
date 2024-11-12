import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { PrendasComponent } from './components/prendas/prendas.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { CreareditarusuariosComponent } from './components/usuarios/creareditarusuarios/creareditarusuarios.component';
import { CreareditarrolesComponent } from './components/roles/creareditarroles/creareditarroles.component';
import { CreareditargaleriaComponent } from './components/galeria/creareditargaleria/creareditargaleria.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CreareditarprendasComponent } from './components/prendas/creareditarprendas/creareditarprendas.component';
import { CreareditarconjuntosComponent } from './components/conjuntos/creareditarconjuntos/creareditarconjuntos.component';
export const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarusuariosComponent,
      },
      {
        path: 'edicionUsuario/:id',
        component: CreareditarusuariosComponent,
      },
    ],
  },
  {
    path: 'roles',
    component: RolesComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarrolesComponent,
      },
      {
        path: 'edicionesRoles/:id',
        component: CreareditarrolesComponent,
      },
    ],
  },
  {
    path: 'prendas',
    component: PrendasComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarprendasComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditarprendasComponent,
      },
    ],
  },
  {
    path: 'conjuntos',
    component: ConjuntosComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarconjuntosComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditarconjuntosComponent,
      },
    ],
  },
  {
      path: 'galerias',
      component: GaleriaComponent,
      children:[
            {
                  path: 'registrar',
                  component: CreareditargaleriaComponent
            },
            {
                  path: 'ediciones/:id',
                  component: CreareditargaleriaComponent
            }
      ]
  },
];
