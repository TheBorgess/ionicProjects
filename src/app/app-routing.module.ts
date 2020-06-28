import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)}, //
  {
    path: 'idealist', //''
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  {
    path: 'idea',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./services/idea/idea.module').then( m => m.IdeaPageModule)
  },
  {
    path: 'userslist',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'sale-list',
    loadChildren: () => import('./pages/sale-list/sale-list.module').then( m => m.SaleListPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale-details/sale-details.module').then( m => m.SaleDetailsPageModule)
  },
  {
    path: 'sale/:id',
    loadChildren: () => import('./pages/sale-details/sale-details.module').then( m => m.SaleDetailsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
