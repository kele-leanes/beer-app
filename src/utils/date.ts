import { orderByDateProps, SortType } from 'src/types';

export const orderByDate = ({
  sort = SortType.DESC,
  documents,
}: orderByDateProps) => {
  return documents.sort((a, b) => {
    const date1 = new Date(a.CreatedAt);
    const date2 = new Date(b.CreatedAt);
    return sort === SortType.DESC
      ? date2.getTime() - date1.getTime()
      : date1.getTime() - date2.getTime();
  });
};

export const timeSince = (date: string) => {
  var seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000,
  );

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  if (interval <= 0) {
    return 'now';
  }
  return Math.floor(seconds) + ' seconds ago';
};
