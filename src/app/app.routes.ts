import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { PrendasComponent } from './components/prendas/prendas.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CreareditargaleriaComponent } from './components/galeria/creareditargaleria/creareditargaleria.component';
import { ConjuntossemanalesComponent } from './components/conjuntossemanales/conjuntossemanales.component';
import { CrearregistrarconjuntossemanalesComponent } from './components/conjuntossemanales/crearregistrarconjuntossemanales/crearregistrarconjuntossemanales.component';

export const routes: Routes = [
      {
            path:'usuarios', component: UsuariosComponent,
      },
      {
            path: 'roles', component: RolesComponent,
      },
      {
            path: 'prendas', component: PrendasComponent,
      },
      {
            path: 'conjuntos', component: ConjuntosComponent,
      },
      {
            path:'galerias',component:GaleriaComponent,
            children:[
                {
                    path:'registrar',component:CreareditargaleriaComponent
                },
                {
                    path:'ediciones/:id',component:CreareditargaleriaComponent
                }
            ]
      },
      {
            path:'Conjuntos_semanal',component:ConjuntossemanalesComponent,
            children:[
                {
                    path:'registrar',component:CrearregistrarconjuntossemanalesComponent
                },
                {
                    path:'ediciones/:id',component:CrearregistrarconjuntossemanalesComponent
                }
            ]
      }
];
