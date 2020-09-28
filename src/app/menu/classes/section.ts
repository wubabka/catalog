export class Section {
  name: string;
  color?: string;
  items: [];
  sections: [];

  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.items = data.items;
    this.sections = data.sections;
  }
}
