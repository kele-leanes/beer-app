import { Document, ViewType } from 'src/types';

export interface CardSectionProps {
  title: string;
  icon: string;
  items: string[];
}

export interface CardItemProps {
  item: Document;
  type?: ViewType;
}
