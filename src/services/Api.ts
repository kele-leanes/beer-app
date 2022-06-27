import { AxiosInstance } from './AxiosInstance';

export const getDocuments = async () => {
  const { data } = await AxiosInstance.get('/documents');
  return { data };
};

export const addDocuments = async ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  const { data } = await AxiosInstance.post('/documents', {
    Name: name,
    Version: version,
  });
  return { data };
};
