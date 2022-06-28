import { useEffect, useState } from 'react';
import { ws } from 'src/services/notifications';
import { Notification } from 'src/types';

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
