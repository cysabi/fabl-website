export { render };

import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

async function render(pageContext) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("root"),
    <App>
      <Page />
    </App>
  );
}
