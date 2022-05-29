import React from "react";
import { Route } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import Search, { loader as SearchLoader } from "./routes/search";
import { AppProviders } from "./context";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <AppProviders>
      <Route path="/" element={<Root />} loader={rootLoader}>
        <Route
          id="route__search"
          path="/search"
          element={<Search />}
          loader={SearchLoader}
        />
      </Route>
    </AppProviders>
  );
}

export default App;
