import React from 'react';
import { Text, View } from 'react-native';
import { timeSince } from 'src/utils/date';
import { styles } from './NotificationItem.styles';
import { NotificationItemProps } from './NotificationItem.types';

export const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        style={
          styles.title
        }>{`${item.UserName} has been created a new document!`}</Text>
      <Text style={styles.body}>{timeSince(item.Timestamp)}</Text>
    </View>
  );
};
