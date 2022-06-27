import React, { useCallback, useLayoutEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Badge, CardItem } from 'src/components';
import { useNotifications } from 'src/hooks/useNotifications';
import { RootStackScreenProps } from 'src/navigation/RootStack';
import { Document, ViewType } from 'src/types';
import { fontPixel } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';
import { AddDocBottomSheet } from './components/AddDocBottomSheet';
import { FooterButton } from './components/FooterButton/FooterButton';
import { Header } from './components/Header';
import { useDocuments, useListType, useModal } from './HomeScreen.hooks';
import { styles } from './HomeScreen.styles';

const ICON_SIZE = fontPixel(20);

export const HomeScreen: React.FC<RootStackScreenProps<'Documents'>> = ({
  navigation,
}) => {
  const { loading, error, documents, sortType, refresh, handlePressSort } =
    useDocuments();
  const { viewType, numberOfColumns, handlePressView } = useListType();
  const { visible, handleModal } = useModal();
  const { notifications } = useNotifications();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Badge
          count={notifications.length}
          onPress={() =>
            navigation.navigate('Notifications', { notifications })
          }
        />
      ),
    });
  }, [navigation, notifications, notifications.length]);

  const renderItem = useCallback(
    ({ item }: { item: Document }) => {
      return <CardItem item={item} type={viewType} />;
    },
    [viewType],
  );

  const emptyListComponent = useCallback(() => {
    return (
      <View style={[styles.flex1, styles.center]}>
        <Text style={[styles.boldText, error && styles.errorText]}>
          {error ? 'Something went wrong!' : 'No data found!'}
        </Text>
        <Text style={styles.text}>Pull to refresh</Text>
      </View>
    );
  }, [error]);

  return (
    <>
      <Header
        sortType={sortType}
        viewType={viewType}
        onPressSort={handlePressSort}
        onPressView={handlePressView}
      />
      <FlatList
        key={`${numberOfColumns}`}
        columnWrapperStyle={
          viewType === ViewType.GRID && styles.justifySpaceBetween
        }
        style={[styles.flatlist, styles.flex1]}
        data={documents}
        renderItem={renderItem}
        ListEmptyComponent={emptyListComponent}
        numColumns={numberOfColumns}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refresh}
            // android
            colors={[theme.grey]}
            progressBackgroundColor={theme.background}
            // ios
            tintColor={theme.grey}
          />
        }
      />
      <FooterButton
        title={'Add document'}
        onPress={handleModal}
        icon={<Icon name="plus" color={theme.white} size={ICON_SIZE} />}
      />
      <AddDocBottomSheet visible={visible} onClose={handleModal} />
    </>
  );
};
