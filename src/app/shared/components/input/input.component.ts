import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'password' | 'tel' | 'email' | 'number';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() controlName: string;
  @Input() formGroup: any;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onValueChange(evt): void {
    this.valueChange.emit(evt);
  }
}
