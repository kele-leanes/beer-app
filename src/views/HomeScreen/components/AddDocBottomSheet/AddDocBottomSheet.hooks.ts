import { useCallback, useMemo, useState } from 'react';
import { addDocuments } from 'src/services/Api';

const INITIAL_STATE = {
  name: '',
  version: '',
};

export const useAddDocument = () => {
  const [values, setValues] = useState(INITIAL_STATE);

  const onTextChange = useCallback(
    (key: string, text: string) => {
      setValues({ ...values, [key]: text });
    },
    [values],
  );

  const onAddDocument = useCallback(async () => {
    await addDocuments(values);
  }, [values]);

  const isValid = useMemo(
    () => Object.values(values).every(value => !!value),
    [values],
  );

  return {
    values,
    isValid,
    onTextChange,
    onAddDocument,
  };
};
