import React from 'react';
import { FlatList } from 'react-native';
import { Notification } from 'src/hooks/useNotifications';
import { RootStackScreenProps } from 'src/navigation/RootStack';
import { NotificationItem } from './components/NotificationItem';

export const NotificationScreen: React.FC<
  RootStackScreenProps<'Notifications'>
> = ({ route }) => {
  const { notifications } = route?.params;

  const renderItem = ({ item }: { item: Notification }) => {
    return <NotificationItem item={item} />;
  };

  return (
    <>
      <FlatList data={notifications} renderItem={renderItem} />
    </>
  );
};
