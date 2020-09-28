import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent implements OnInit {
  @Input() title: string;
  @Input() disabled: boolean;
  @Input() type: string;

  @Output() clickButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickButton(): void {
    this.clickButton.emit();
  }
}
