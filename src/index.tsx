import React from "react";
// @ts-ignore
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const main = async () => {
  /*
    NOTE: If you want to disable `msw` AKA the ServiceWorker that is intercepting requests for development purposes:
    1. comment out code below, which disables all handlers defined in the `handlers.js` file OR
    2. comment out specific handlers in the `handlers.js` file
  */
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
      onUnhandledRequest: ({ headers, method, url }, print) => {
        /* Ignore Chrome extensions loaded on the page */
        const ignoreKeywords = ["chrome-extension", "/ui/"];
        const isMatchingIgnoreUrl = ignoreKeywords.some((ignoreKeyword) => {
          return url.href.includes(ignoreKeyword);
        });
        if (isMatchingIgnoreUrl) {
          return undefined;
        }
        print.warning();
      },
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
main();
