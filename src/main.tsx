import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./mes-styles/styles-contactezmoi.css";
import "./mes-styles/styles-cartes.css";
import "./mes-styles/styles-evenements.css";
import "./mes-styles/styles-entete.css";
import "./mes-styles/styles-pages.css";
import "./mes-styles/styles-popup.css";
import "./mes-styles/styles-info.css";
import "./mes-styles/styles-autres.css";
import "./mes-styles/styles-competences.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
