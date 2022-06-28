import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from 'src/types';

export const storeData = async (storageKey: StorageKey, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (storageKey: StorageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
