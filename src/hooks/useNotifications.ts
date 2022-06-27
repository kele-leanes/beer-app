import { useEffect, useState } from 'react';
import { ws } from 'src/services/notifications';

export type Notification = {
  Timestamp: string;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
};

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    ws.onopen;
    ws.onmessage = e =>
      setNotifications(prevState => [
        ...prevState,
        JSON.parse(e.data) as Notification,
      ]);
  }, []);

  return {
    notifications,
  };
};
