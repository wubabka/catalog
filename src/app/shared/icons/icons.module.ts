import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconTreeComponent } from './icon-tree/icon-tree.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { IconUpComponent } from './icon-up/icon-up.component';
import { IconDownComponent } from './icon-down/icon-down.component';

@NgModule({
  declarations: [
    IconTreeComponent,
    IconMenuComponent,
    IconUpComponent,
    IconDownComponent,
  ],
  exports: [
    IconTreeComponent,
    IconMenuComponent,
    IconUpComponent,
    IconDownComponent,
  ],
  imports: [CommonModule],
})
export class IconsModule {}
