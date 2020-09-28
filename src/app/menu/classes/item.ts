export class Item {
  name: string;
  sale: number;

  constructor(data) {
    this.name = data.name;
    this.sale = data.sale;
  }
}
