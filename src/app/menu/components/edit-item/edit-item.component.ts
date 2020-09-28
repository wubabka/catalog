import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Item } from '../../classes/item';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  itemForm = this.fb.group({
    name: ['', Validators.required],
    sale: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, public menuService: MenuService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.itemForm.setValue({
        name: this.menuService.currentElement.name,
        sale: this.menuService.currentElement.sale,
      });
    }, 10);
  }

  save(): any {
    const item = new Item(this.itemForm.value);

    this.menuService.updateItem(item);
    this.menuService.saveItem(this.itemForm);
  }
}
