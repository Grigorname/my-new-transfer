import React from "react";
import Header from "./components/Header";
import { I18nextProvider } from "react-i18next";
import i18n from "./core/language/i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header />
      </div>
    </I18nextProvider>
  );
}

export default App;
