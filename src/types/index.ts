export type Document = {
  Attachments: string[];
  Contributors: ContributorsType[];
  CreatedAt: string;
  ID: string;
  Title: string;
  UpdatedAt: string;
  Version: string;
};

type ContributorsType = {
  ID: string;
  Name: string;
};

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type orderByDateProps = {
  sort?: SortType;
  documents: Document[];
};

export enum ViewType {
  GRID = 'GRID',
  LIST = 'LIST',
}

export type Notification = {
  Timestamp: string;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
};

export enum StorageKey {
  NOTIFICATIONS = 'notifications',
  DOCUMENTS = 'documents',
}
