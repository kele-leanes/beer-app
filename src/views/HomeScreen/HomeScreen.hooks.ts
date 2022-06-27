import { useCallback, useEffect, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';
import { getDocuments } from 'src/services/Api';
import { Document, SortType, ViewType } from 'src/types';
import { orderByDate } from 'src/utils/date';

export const useDocuments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [sortType, setSortType] = useState<SortType>(SortType.DESC);

  const fetchDocuments = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await getDocuments();
      setDocuments(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePressSort = useCallback(
    () =>
      setSortType(prevState =>
        prevState === SortType.DESC ? SortType.ASC : SortType.DESC,
      ),
    [],
  );

  const orderedDocuments = useMemo(
    () => orderByDate({ sort: sortType, documents }),
    [documents, sortType],
  );

  useEffect(() => {
    fetchDocuments();
  }, []);

  return {
    loading,
    error,
    documents: orderedDocuments,
    sortType,
    refresh: fetchDocuments,
    handlePressSort,
  };
};

export const useListType = () => {
  const [viewType, setViewType] = useState(ViewType.GRID);
  const numberOfColumns = viewType === ViewType.GRID ? 2 : 1;

  const handlePressView = useCallback(
    () =>
      setViewType(prevState =>
        prevState === ViewType.GRID ? ViewType.LIST : ViewType.GRID,
      ),
    [],
  );

  return {
    numberOfColumns,
    viewType,
    handlePressView,
  };
};

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = useCallback(() => {
    if (visible) {
      Keyboard.dismiss();
    }
    setVisible(!visible);
  }, [visible]);

  return {
    visible,
    handleModal,
  };
};
