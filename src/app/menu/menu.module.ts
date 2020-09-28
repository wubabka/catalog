import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { PopoverModule } from '../popover/popover.module';
import { SharedModule } from '../shared/shared.module';

import { MenuComponent } from './menu.component';
import { SectionComponent } from './components/section/section.component';
import { ItemComponent } from './components/item/item.component';
import { EmptyComponent } from './components/empty/empty.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddSectionComponent } from './components/add-section/add-section.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { EditSectionComponent } from './components/edit-section/edit-section.component';

@NgModule({
  declarations: [
    MenuComponent,
    SectionComponent,
    ItemComponent,
    EmptyComponent,
    CatalogComponent,
    AddSectionComponent,
    AddItemComponent,
    LayoutComponent,
    EditItemComponent,
    EditSectionComponent,
  ],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MenuModule {}
