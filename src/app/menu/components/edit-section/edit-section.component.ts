import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { COLORS } from '../../../colors';
import { Section } from '../../classes/section';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss'],
})
export class EditSectionComponent implements OnInit {
  sectionForm = this.fb.group({
    name: ['', Validators.required],
    color: [''],
    items: [[]],
    sections: [[]],
  });

  sections = ['first', 'second'];
  colors = COLORS;
  isColors = true;

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.sectionForm.setValue({
        name: this.menuService.currentElement.name,
        color: this.menuService.currentElement.color || '',
        items: this.menuService.currentElement.items,
        sections: this.menuService.currentElement.sections,
      });
    }, 10);
  }

  // setSection(evt): void {
  //   this.sectionForm.patchValue({ section: evt });
  // }

  setColor(evt): void {
    this.sectionForm.patchValue({ color: evt.color });
  }

  save(): void {
    const section = new Section(this.sectionForm.value);

    this.menuService.updateItem(section);
    this.menuService.saveItem(this.sectionForm);
  }
}
