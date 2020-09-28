import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { COLORS } from '../../../colors';
import { Section } from '../../classes/section';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent implements OnInit {
  colors = COLORS;

  sectionForm = this.fb.group({
    name: ['', Validators.required],
    color: [''],
    items: [[]],
    sections: [[]],
  });

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  ngOnInit(): void {}

  // setSection(evt): void {
  //   this.sectionForm.patchValue({ section: evt });
  // }

  setColor(evt): void {
    this.sectionForm.patchValue({ color: evt.color });
  }

  save(): void {
    const section = new Section(this.sectionForm.value);

    this.menuService.checkCurrent(section, 'sections');
    this.menuService.saveItem(this.sectionForm);
  }
}
