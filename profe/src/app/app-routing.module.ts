import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresadoprofeGuard } from './guards/ingresadoprofe.guard';
import { NoingresadoprofeGuard } from './guards/noingresadoprofe.guard';

const routes: Routes = [

  {
    path: '',                     
    redirectTo: 'loginprofe',
    pathMatch: 'full'
  },

  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'introduccion',
    loadChildren: () => import('./pages/introduccion/introduccion.module').then( m => m.IntroduccionPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'reestpas',
    loadChildren: () => import('./pages/reestpas/reestpas.module').then( m => m.ReestpasPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'cambiarpas',
    loadChildren: () => import('./pages/cambiarpas/cambiarpas.module').then( m => m.CambiarpasPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'asistiempo',
    loadChildren: () => import('./pages/asistiempo/asistiempo.module').then( m => m.AsistiempoPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'listaasis',
    loadChildren: () => import('./pages/listaasis/listaasis.module').then( m => m.ListaasisPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'articulos',
    loadChildren: () => import('./pages/articulos/articulos.module').then( m => m.ArticulosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'loginprofe',
    loadChildren: () => import('./pages/loginprofe/loginprofe.module').then( m => m.LoginprofePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'regprofe',
    loadChildren: () => import('./pages/regprofe/regprofe.module').then( m => m.RegprofePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'inicioprofe',
    loadChildren: () => import('./pages/inicioprofe/inicioprofe.module').then( m => m.InicioprofePageModule),
    canActivate:[IngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
