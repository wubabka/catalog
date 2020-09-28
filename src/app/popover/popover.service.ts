import { Injectable } from '@angular/core';

import { Popover } from './popover';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  isShowPopover: boolean;
  popover = {
    top: '',
    left: '',
    width: '',
  };
  popoverType: string;
  popoverItems: Popover[];
  popoverItemsSection: Popover[] = [
    {
      title: 'Добавить позицию',
      icon: 'plus',
    },
    {
      title: 'Добавить раздел меню',
      icon: 'plus',
    },
    {
      title: 'Редактировать',
      icon: 'edit',
    },
    {
      title: 'Удалить',
      icon: 'delete',
    },
  ];

  popoverItemsItem: Popover[] = [
    {
      title: 'Редактировать',
      icon: 'edit',
    },
    {
      title: 'Удалить',
      icon: 'delete',
    },
  ];
  constructor() {}

  getPopoverData(evt): any {
    const coords = evt.currentTarget.getBoundingClientRect();

    this.popover.top = coords.top + coords.height + 8;
    this.popover.left = coords.left;
    this.popover.width = coords.left + 12;
  }

  getPopoverType(evt): any {
    this.popoverType = evt;
  }

  showPopover(): void {
    this.isShowPopover = true;

    if (this.popoverType === 'section') {
      this.popoverItems = this.popoverItemsSection;
    } else if (this.popoverType === 'item') {
      this.popoverItems = this.popoverItemsItem;
    }
  }

  hidePopover(): void {
    this.isShowPopover = false;
  }
}
