import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () =>
      import('src/app/menu/menu.module').then((m) => m.MenuModule),
  },
  { path: '**', redirectTo: 'menu/catalog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
