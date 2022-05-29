import { QueryClient } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient";
import { createWebStoragePersister } from "react-query/createWebStoragePersister";
const TWO_MINUTES_IN_MILLISECONDS = 1000 * 60 * 2;
const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5;

export const queryClient = new QueryClient({
  /**
   * @description
   * This is the global config for react query. These settings
   * can be overwritten on a per query basis inside our hooks.
   */
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 0,
      cacheTime: 0,
      // staleTime: TWO_MINUTES_IN_MILLISECONDS,
      // cacheTime: TWO_MINUTES_IN_MILLISECONDS,
      refetchInterval: FIVE_MINUTES_IN_MILLISECONDS,
    },
  },
});
// const localStoragePersister = createWebStoragePersister({
//   storage: window.localStorage,
// });

/**
 * @description
 * Cache API data in browser's localStorage. This allows us keep data cached across
 * page refreshes, closing & opening the browser etc.
 *
 * See:
 * https://react-query.tanstack.com/plugins/createWebStoragePersistor#_top
 */
// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// });
