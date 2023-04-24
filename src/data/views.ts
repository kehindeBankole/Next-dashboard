import { useQuery } from 'react-query';
import { View } from 'types/index';

export default function useViews() {
  const query = useQuery('views', async () => {
    const response = await fetch('https://fe-task-api.mainstack.io/');

    const data: View = await response.json();
    if (!data) throw new Error('could not fetch data');

    return data;
  });

  return query;
}
