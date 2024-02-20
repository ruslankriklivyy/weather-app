import { FilterType } from "../general/FilterType";

export interface PickerItem {
  id: string;
  title: string;
  type: FilterType;
}
