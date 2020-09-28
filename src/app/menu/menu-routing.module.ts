import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { EmptyComponent } from './components/empty/empty.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddSectionComponent } from './components/add-section/add-section.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditSectionComponent } from './components/edit-section/edit-section.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'empty', component: EmptyComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'add-section', component: AddSectionComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'edit-section', component: EditSectionComponent },
      { path: 'edit-item', component: EditItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
