import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './Header.styles';
import { HeaderProps } from './Header.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { fontPixel } from 'src/utils/dimensions';
import { ViewType } from 'src/types';
import { theme } from 'src/utils/theme';

const ICON_SIZE = fontPixel(20);

export const Header: React.FC<HeaderProps> = ({
  sortType,
  viewType,
  onPressSort,
  onPressView,
}) => {
  const isListType = viewType === ViewType.LIST;

  return (
    <View style={styles.header}>
      <Pressable
        style={({ pressed }) => [styles.outlined, pressed && { opacity: 0.5 }]}
        onPress={onPressSort}>
        <View style={styles.content}>
          <Text>Sort </Text>
          <Icon name={`sort-${sortType.toLowerCase()}`} />
        </View>
      </Pressable>
      <View style={[styles.outlined, styles.content]}>
        <Pressable
          onPress={onPressView}
          style={[styles.pressable, !isListType && styles.unselected]}>
          <EntypoIcon
            name="list"
            size={ICON_SIZE}
            color={isListType ? theme.primary : theme.grey}
          />
        </Pressable>
        <Pressable
          onPress={onPressView}
          style={[styles.pressable, isListType && styles.unselected]}>
          <EntypoIcon
            name="grid"
            size={ICON_SIZE}
            color={!isListType ? theme.primary : theme.grey}
          />
        </Pressable>
      </View>
    </View>
  );
};
