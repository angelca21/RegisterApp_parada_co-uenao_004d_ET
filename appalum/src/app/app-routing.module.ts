import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresadoprofeGuard } from './guards/ingresadoprofe.guard';
import { NoingresadoprofeGuard } from './guards/noingresadoprofe.guard';

const routes: Routes = [

  {
    path: '',                     
    redirectTo: 'inciarse',
    pathMatch: 'full'
  },
  {
    path: 'inciarse',
    loadChildren: () => import('./pages/inciarse/inciarse.module').then( m => m.InciarsePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
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
    path: 'escanearco',
    loadChildren: () => import('./pages/escanearco/escanearco.module').then( m => m.EscanearcoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'asistiempo',
    loadChildren: () => import('./pages/asistiempo/asistiempo.module').then( m => m.AsistiempoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'listaasis',
    loadChildren: () => import('./pages/listaasis/listaasis.module').then( m => m.ListaasisPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'articulos',
    loadChildren: () => import('./pages/articulos/articulos.module').then( m => m.ArticulosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/reg/reg.module').then( m => m.RegPageModule),
    canActivate:[NoIngresadoGuard]
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
