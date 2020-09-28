import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Item } from '../../classes/item';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  itemForm = this.fb.group({
    name: ['', Validators.required],
    sale: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  ngOnInit(): void {}

  save(): any {
    const item = new Item(this.itemForm.value);

    this.menuService.checkCurrent(item, 'items');
    this.menuService.saveItem(this.itemForm);
  }
}
