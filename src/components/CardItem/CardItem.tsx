import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Text, View } from 'react-native';
import { ViewType } from 'src/types';
import { pixelSizeHorizontal, SCREEN_WIDTH } from 'src/utils/dimensions';
import { styles } from './CardItem.styles';
import { CardItemProps, CardSectionProps } from './CardItems.types';

const SectionColumns: React.FC<CardSectionProps> = ({ title, icon, items }) => {
  return (
    <View style={styles.sectionColumn}>
      <View style={styles.header}>
        <Icon name={icon} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {items.map((item, index) => (
        <Text key={`${index}`} style={styles.body}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export const CardItem: React.FC<CardItemProps> = ({
  item,
  type = ViewType.GRID,
}) => {
  const cardWidth =
    type === ViewType.GRID
      ? (SCREEN_WIDTH - pixelSizeHorizontal(40)) / 2
      : SCREEN_WIDTH - pixelSizeHorizontal(32);

  return (
    <View style={[styles.container, { width: cardWidth }]}>
      {type === ViewType.GRID ? (
        <>
          <Text numberOfLines={1} style={styles.title}>
            {item.Title}
          </Text>
          <Text style={styles.body}>{` Version ${item.Version}`}</Text>
        </>
      ) : (
        <>
          <View style={styles.header}>
            <Text numberOfLines={1} style={styles.title}>
              {item.Title}
            </Text>
            <Text style={[styles.body]}>{`Version ${item.Version}`}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <SectionColumns
              icon="user"
              title={'Contributors'}
              items={item.Contributors.map(cont => cont.Name)}
            />
            <SectionColumns
              icon="paperclip"
              title={'Attachments'}
              items={item.Attachments}
            />
          </View>
        </>
      )}
    </View>
  );
};
