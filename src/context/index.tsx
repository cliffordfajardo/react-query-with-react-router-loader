import React from "react";
import { DataBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../utils";

/**
 * @description
 * See: https://react-query.tanstack.com/devtools
 */
const ReactQueryDevTools = React.lazy(() =>
  import("react-query/devtools").then((module) => ({
    default: module.ReactQueryDevtools,
  }))
);

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <DataBrowserRouter fallbackElement={<></>}>
            <>{children}</>
          </DataBrowserRouter>
          {process.env.NODE_ENV === "development" && (
            <React.Suspense fallback={null}>
              <ReactQueryDevTools position="bottom-right" />
            </React.Suspense>
          )}
        </QueryClientProvider>
      </React.StrictMode>
    </>
  );
};
