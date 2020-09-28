import { Item } from './item';

export interface Section {
  items: Item[];
  sections: Section[];
  name: string;
  color?: string;
}
