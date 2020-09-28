import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PopoverService } from '../popover/popover.service';
import { UtilService } from '../shared/services/util.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  catalog: Array<{}>;
  currentElement: any;
  currentArray: any;

  constructor(
    private router: Router,
    private utilService: UtilService,
    private popoverService: PopoverService
  ) {}

  setToLocalStorage(key: string, value): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  addItem(): any {
    this.getCurrentArray(this.currentElement);
    this.router.navigate(['/menu/add-item']);
  }

  addSection(): any {
    this.getCurrentArray(this.currentElement);
    this.router.navigate(['/menu/add-section']);
  }

  editItem(): any {
    this.getCurrentArray(this.currentElement);
    this.router.navigate(['/menu/edit-item']);
  }

  editSection(): any {
    this.getCurrentArray(this.currentElement);
    this.router.navigate(['/menu/edit-section']);
  }

  deleteMenuItem(): void {
    this.getCurrentArray(this.currentElement);

    this.currentArray.splice(
      this.utilService.findCurrentIndex(this.currentArray, this.currentElement),
      1
    );

    this.setToLocalStorage('menu', this.catalog);
  }

  goUp(evt): void {
    this.getCurrentArray(evt);
    this.utilService.swap(
      this.currentArray,
      this.utilService.findCurrentIndex(this.currentArray, evt),
      this.utilService.findCurrentIndex(this.currentArray, evt) - 1
    );

    this.setToLocalStorage('menu', this.catalog);
  }

  goDown(evt): void {
    this.getCurrentArray(evt);
    this.utilService.swap(
      this.currentArray,
      this.utilService.findCurrentIndex(this.currentArray, evt),
      this.utilService.findCurrentIndex(this.currentArray, evt) + 1
    );

    this.setToLocalStorage('menu', this.catalog);
  }

  getCurrentArray(item): any {
    for (const val of this.catalog) {
      if (item === val) {
        this.currentArray = this.catalog;
      } else {
        this.deepSearch(val, item);
      }
    }

    return this.currentArray;
  }

  deepSearch(value, item): any {
    if (value.sections?.length) {
      for (const val of value.sections) {
        if (item === val) {
          this.currentArray = value.sections;
        } else {
          this.deepSearch(val, item);
        }
      }
    }

    if (value.items?.length) {
      for (const val of value.items) {
        if (item === val) {
          this.currentArray = value.items;
        } else {
          this.deepSearch(val, item);
        }
      }
    }

    return this.currentArray;
  }

  getCurrentElement(evt): void {
    this.currentElement = evt;
  }

  saveItem(form): void {
    this.popoverService.hidePopover();
    this.setToLocalStorage('menu', this.catalog);
    form.reset();
    this.router.navigate(['/menu/catalog']);
  }

  updateItem(item): void {
    this.currentArray.splice(
      this.currentArray.indexOf(this.currentElement),
      1,
      item
    );
  }

  checkCurrent(item, arr): void {
    if (this.currentElement === this.catalog) {
      this.currentElement.push(item);
    } else {
      this.currentElement[arr].push(item);
    }
  }

  clearCommonList(): void {
    const commonList = document.querySelectorAll('.common--active');
    commonList.forEach((val) => {
      val.classList.remove('common--active');
    });
  }
}
