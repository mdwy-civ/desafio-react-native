import {useState} from 'react';
import {getUser} from '../services/github';

type UseGitHub = [
  (user: string) => void,
  {
    loading: boolean;
    error: boolean;
    data: number;
  },
];

export const useGitHub = (): UseGitHub => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<number>(0);

  const callback = (user: string) => {
    setLoading(true);
    setError(false);

    getUser(user)
      .then((req) => {
        setData(req.data.public_repos);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [callback, {loading, error, data}];
};
