import { Component, Input, OnInit } from '@angular/core';

import { Popover } from './popover';

import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() popovers: Popover[];
  @Input() type: string;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  clickItem(evt): void {
    switch (evt.title) {
      case 'Добавить позицию':
        this.menuService.addItem();
        break;
      case 'Добавить раздел меню':
        this.menuService.addSection();
        break;
      case 'Редактировать':
        if (this.type === 'section') {
          this.menuService.editSection();
        } else if (this.type === 'item') {
          this.menuService.editItem();
        }
        break;
      case 'Удалить':
        this.menuService.deleteMenuItem();
        break;
    }
  }
}
