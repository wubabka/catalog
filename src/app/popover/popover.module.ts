import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [PopoverComponent, ItemComponent],
  exports: [PopoverComponent],
  imports: [CommonModule],
})
export class PopoverModule {}
