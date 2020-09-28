import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() list: any;
  @Input() placeholder = '';
  @Input() currentValue = '';
  @Input() formGroup: any;
  @Input() controlName: string;
  @Input() isShow: boolean;

  @Output() setItem = new EventEmitter();

  @ViewChild('dropdown', { static: false }) dropdown: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(evt): void {
    const path = evt.path || (evt.composedPath && evt.composedPath());

    this.isShow = path.some((el) => el === this.dropdown.nativeElement);
  }

  constructor() {}

  ngOnInit(): void {}

  onSetItem(evt): void {
    setTimeout(() => {
      this.setItem.emit(evt);
      this.currentValue = evt;
      this.isShow = false;
    }, 100);
  }
}
