import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fontPixel } from 'src/utils/dimensions';
import { styles } from './Badge.styles';
import { BadgeProps } from './Badge.types';

const ICON_SIZE = fontPixel(16);

export const Badge: React.FC<BadgeProps> = ({ count, onPress }) => {
  const badgeNumber = count > 9 ? '+9' : count;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="notifications" size={ICON_SIZE} />
      {!!count && (
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{badgeNumber}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
