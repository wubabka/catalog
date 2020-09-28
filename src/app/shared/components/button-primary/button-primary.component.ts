import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() isIcon: boolean;
  @Input() text: string;
  @Input() type: string;

  @Output() clickButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickButton(): void {
    this.clickButton.emit();
  }
}
