import { createRoot } from "react-dom/client";
import App from "./Components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
