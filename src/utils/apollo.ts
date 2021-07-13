import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = {}) {
  // check if apolloClient instance exists
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // restore data from cache on client side
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // always initialize SSR with clean cache
  if (typeof window === 'undefined') {
    return apolloClientGlobal;
  }

  // create apolloClient on client side
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
