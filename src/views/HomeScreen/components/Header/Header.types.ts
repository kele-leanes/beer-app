import { SortType, ViewType } from 'src/types';

export interface HeaderProps {
  sortType: SortType;
  viewType: ViewType;
  onPressSort: () => void;
  onPressView: () => void;
}
