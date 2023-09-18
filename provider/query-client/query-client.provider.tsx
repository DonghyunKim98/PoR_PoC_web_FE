'use client';
import axios from 'axios';
import { PropsWithChildren } from 'react';
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query';

type QueryClientProviderProps = PropsWithChildren<{}>;

export const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url, requestedData] }) => {
        if (typeof url === 'string') {
          const { data } = await axios.get(url, {
            params: requestedData,
          });

          return data;
        }
        throw new Error('Invalid QueryKey');
      },
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
