import React from "react";
import "./tailwind.css";

import ReactDOM from "react-dom/client";
import { Button } from "./components/button/button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Button variant="contained"/>
);
