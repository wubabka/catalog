import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  findCurrentIndex(arr, item): number {
    return arr.findIndex((val) => val === item);
  }

  swap(arr: Array<any>, firstIndex: number, secondIndex: number): void {
    arr[firstIndex] = arr.splice(secondIndex, 1, arr[firstIndex])[0];
  }
}
