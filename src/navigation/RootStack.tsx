import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { HomeScreen } from 'src/views';
import { NotificationScreen } from 'src/views/NotificationScreen';
import { Notification } from 'src/hooks/useNotifications';

export type RootStackParamList = {
  Documents: undefined;
  Notifications: {
    notifications: Notification[];
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const screenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
};

export const RootStack: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Documents" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
